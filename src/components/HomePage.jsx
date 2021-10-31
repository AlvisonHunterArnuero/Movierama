import React, { Fragment, useState, useEffect } from "react";
import { Card } from "./Card";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

function HomePage() {
  const [homePage, setHomePage] = useState([]);
  let rndTopMovies = [
    "harry potter",
    "star wars",
    "spider man",
    "Pirates of the Caribbean",
    "avengers",
    "mission impossible",
    "fast and furious",
  ];
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
      <div className='grid grid-cols-3 gap-4'>
        {homePage.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
