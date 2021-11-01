import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  const imgNotAvailable =
    "https://res.cloudinary.com/alvison-hunter/image/upload/c_scale,q_auto:low,w_300/v1635741075/movie_not_found_awkmgs.png";
  const { setChosenTitle } = useContext(DataContext);
  return (
    <div
      key={item.imdbID}
      className='bg-black min-h-full overflow-hidden w-10/12 drop-shadow-2xl cursor-pointer mx-auto rounded'
    >
      <Link
        to={`/movies/${item.imdbID}`}
        onClick={() => setChosenTitle(item.Title)}
        className='w-full block h-full'
      >
        <img
          alt={item.Title}
          src={item.Poster}
          className='max-h-90 w-full object-cover'
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${imgNotAvailable}`;
          }}
        />
        <div className='dark:bg-gray-800 w-full p-4'>
          <p className='text-green-500 text-md font-medium'>
            Year: {item.Year}
          </p>
          <p className='text-gray-800 dark:text-white text-md font-medium mb-2 movie-title'>
            {item.Title}
          </p>
          <p className='text-gray-400 dark:text-gray-300 font-light text-md'>
            {item.Plot}
          </p>
        </div>
      </Link>
    </div>
  );
};
