import React, { Fragment, useEffect, useContext } from "react";
import { Card } from "./Card";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { getRandomMovie } from "../Helpers";
import { DataContext } from "../context/DataProvider";
import { useSpring, animated } from "react-spring";

const HomePage= () => {
  // using this context property to populate the first movies
  const { firstRandomMovieList, setFirstRandomMovieList } =
    useContext(DataContext);

  // React Spring animation to make it work
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 150, friction: 40 },
  }));
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 40,
    (x - window.innerWidth / 2) / 40,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  // API fetch event to retrieve the data needed on this component
  const getAPIResults = async () => {
    const fetchedDataResults = await fetch(
      `https://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_API_KEY
      }&page=1&s=${getRandomMovie()}`
    );
    const res_JSON = await fetchedDataResults.json();
    setFirstRandomMovieList(res_JSON.Search);
  };

  useEffect(() => {
    getAPIResults();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <div className='grid grid-cols gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {firstRandomMovieList &&
          firstRandomMovieList.map((item, ind) => (
            <animated.div
              class='card'
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            >
              <Card key={ind} item={item} />
            </animated.div>
          ))}
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
