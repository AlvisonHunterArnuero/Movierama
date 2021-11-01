import React, { useContext, Fragment, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import HomeButton from "./HomeButton";
import Footer from "./Footer";
import { Card } from "./Card";
import { Spinner } from "./Spinner";
function MovieResults() {
  const { movies, setMovies, input, page } = useContext(DataContext);

  useEffect(() => {
    const getApi = async () => {
      const urlInfo = await fetch(
        `https://www.omdbapi.com/?t=batman&apikey=${process.env.REACT_APP_API_KEY}&plot=full&page=${page}&s=${input.movieTitle}`
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
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 my-3'>
        {movies ? (
          movies.map((item, ndx) => <Card key={ndx} item={item} />)
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </Fragment>
  );
}

export default MovieResults;
