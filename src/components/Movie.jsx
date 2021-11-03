import React, { useEffect, useState, Fragment, useContext } from "react";
import ReturnBtn from "./HomeButton";
import toast from "react-hot-toast";
import { DataContext } from "../context/DataProvider";

const Movie = ({ match }) => {
  const { chosenTitle } = useContext(DataContext);
  const [movieDetails, setMovieDetails] = useState([]);

  const notify = () =>
    toast.success(
      `Successfully pulled details for ${chosenTitle || "this movie"}`
    );

  const getmovieDetails = async () => {
    const url_info = await fetch(
      `https://www.omdbapi.com/?i=${match.params.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const res_JSON = await url_info.json();
    setMovieDetails(res_JSON);
  };

  useEffect(() => {
    getmovieDetails();
    notify();
    // eslint-disable-next-line
  }, [match]);
  
  const { Poster, Title, Plot, Released, Runtime, Actors, Writer } = movieDetails;

  return (
    <Fragment>
      <div className='container h-screen mx-auto grid grid-cols md:grid-cols-2 justify-items-center'>
        <div className=''>
          <img src={Poster} alt={Title} className='w-full h-full transform scale-95' />
        </div>
        <div className='text-xl p-4 w-full font-sans font-light'>
          <p className='uppercase text-yellow-200 text-xl my-4'>
            <span className='font-medium'>Title: </span> {Title}
          </p>
          <p className='w-11/12 text-yellow-500 mb-3'>
            <span className='font-medium'>Resume: </span>
            {Plot}
          </p>
          <p className='text-pink-400 mb-3'>
            <span className='font-medium'>Released: </span>
            {Released}
          </p>
          <p className='text-blue-500 mb-3'>
            <span className='font-medium'>Duration: </span>
            {Runtime}
          </p>
          <p className='text-green-300 mb-3'>
            <span className='font-medium'>Actors: </span>
            {Actors}
          </p>
          <p className='text-indigo-300 mb-3'>
            <span className='font-medium'>Writers: </span>
            {Writer}
          </p>
          <div className='flex h-8 justify-start'>
            {" "}
            <ReturnBtn />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
