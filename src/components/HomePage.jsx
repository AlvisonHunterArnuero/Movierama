import React, { Fragment, useState, useEffect } from "react";
import { Card } from "./Card";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

function HomePage() {
  const rndTopMovies = [
    "harry potter",
    "star wars",
    "transformers",
    "spider man",
    "Batman",
    "X-Men",
    "Ip Man",
    "Pirates of the Caribbean",
    "avengers",
    "mission impossible",
    "fast and furious",
    "Indiana Jones",
    "Kill Bill",
    "The Chronicles of Narnia",
    "Back to the Future",
    "The Godfather",
    "Dark Knight",
    "Lord Of The Rings",
  ];

  const [homePage, setHomePage] = useState([]);

  let randomMovie = [];
  randomMovie.push(rndTopMovies[Math.floor(Math.random() * rndTopMovies.length)]);
  const getApi = async () => {
    const urlInfo = await fetch(
      `https://www.omdbapi.com/?apikey=87c0c98e&page=1&s=${randomMovie}`
    );
    const res_JSON = await urlInfo.json();
    setHomePage(res_JSON.Search);
  };

  useEffect(() => {
    getApi();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {homePage.map((item, ind) => (
          <Card key={ind} item={item} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
