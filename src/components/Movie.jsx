import React, { useEffect, useState, Fragment,useContext  } from "react";
import ReturnBtn from "./HomeButton";
import toast from 'react-hot-toast';
import { DataContext } from "../context/DataProvider";

const Movie = ({ match }) => {
  const [singleMovie, setSingleMovie] = useState([]);
  const { chosenTitle } = useContext(DataContext);
  const notify = () => toast.success(`Successfully pulled details for ${chosenTitle|| 'this movie'}`);
  const getSingleMovieInfo = async () => {
    const url_info = await fetch(
      `https://www.omdbapi.com/?i=${match.params.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const res_JSON = await url_info.json();
    setSingleMovie(res_JSON);
  };
 
  useEffect(() => {
    getSingleMovieInfo();
    notify();
    // eslint-disable-next-line
  }, [match]);
  return (
    <Fragment>
      <div className='mx-16 my-2 w-1/8 grid grid-cols md:grid-cols-2 border-2 border-transparent border-opacity-60 rounded-lg overflow-hidden'>
        <div className='col-auto'>
          <img src={singleMovie.Poster} alt='' className="h-full w-full" />
        </div>
        <div className='text-xl p-8'>
          <p className="uppercase text-yellow-200 text-xl my-4">
            <span className="font-medium">Title: </span> {singleMovie.Title}
          </p>
          <p className="w-11/12 text-yellow-500 mb-3">
            <span className="font-medium">Resume: </span>
            {singleMovie.Plot}
          </p>
          <p className="text-pink-400 mb-3">
            <span className="font-medium">Released: </span>
            {singleMovie.Released}
          </p>
          <p className="text-blue-500 mb-3">
            <span className="font-medium">Duration: </span>
            {singleMovie.Runtime}
          </p>
          <p className="text-green-300 mb-3">
            <span className="font-medium">Actors: </span>
            {singleMovie.Actors}
          </p>
          <p className="text-indigo-300 mb-3">
            <span className="font-medium">Writers: </span>
            {singleMovie.Writer}
          </p>
          <div className="flex h-8 justify-start"> <ReturnBtn /></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
