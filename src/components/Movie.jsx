import React, { useEffect, useState, Fragment } from "react";
import ReturnBtn from "./HomeButton";

const Movie = ({ match }) => {
  const [singleMovie, setSingleMovie] = useState([]);
  const getSingleMovieInfo = async () => {
    const url_info = await fetch(
      `https://www.omdbapi.com/?i=${match.params.imdbID}&apikey=87c0c98e`
    );
    const res_JSON = await url_info.json();
    setSingleMovie(res_JSON);
  };
  useEffect(() => {
    getSingleMovieInfo();
    // eslint-disable-next-line
  }, [match]);
  return (
    <Fragment>
     
      <div className='flex flex-cols-2 container mx-auto mt-4 py-4 bg-black px-2'>
        <div className='h-100'>
          <img src={singleMovie.Poster} alt='' width="300" height="468" />
        </div>
        <div className='font-serif text-xl text-white p-6'>
          {" "}
          <p className="text-yellow-200 text-2xl">
            <span>Title: </span> {singleMovie.Title}
          </p>
          <p className="w-11/12 text-yellow-500">
            <span>Resume: </span>
            {singleMovie.Plot}
          </p>
          <p className="text-pink-400">
            <span>Released: </span>
            {singleMovie.Released}
          </p>
          <p className="text-green-500">
            <span>Duration: </span>
            {singleMovie.Runtime}
          </p>
          <p className="text-green-300">
            <span>Actors: </span>
            {singleMovie.Actors}
          </p>
          <p className="text-indigo-300">
            <span>Writers: </span>
            {singleMovie.Writer}
          </p>
          <p className="flex h-8 justify-start"> <ReturnBtn /></p>
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
