import React, { useContext, Fragment, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import HomeButton from "./HomeButton";
import Footer from "./Footer";
import { Card } from "./Card";
import { Spinner } from "./Spinner";
function CardsMovies() {
  const { movies, setMovies, input, page } = useContext(DataContext);
  useEffect(() => {
    const getApi = async () => {
      const urlInfo = await fetch(
        `https://www.omdbapi.com/?t=batman&apikey=87c0c98e&plot=full&page=${page}&s=${input.movieTitle}`
      );
      const res_JSON = await urlInfo.json();
      setMovies(res_JSON.Search);
    };
    getApi();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <HomeButton />
      <div className='grid grid-cols-2 gap-4'>
        {movies ? movies.map((item) => <Card item={item} />) : <Spinner />}
      </div>
      <Footer />
    </Fragment>
  );
}

export default CardsMovies;
