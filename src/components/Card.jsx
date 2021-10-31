import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  return (
    <div
      key={item.imdbID}
      className='overflow-hidden shadow-lg h-100 w-7/12 cursor-pointer m-auto'
    >      
    <Link to={`/movies/${item.imdbID}`} className='w-full block h-full'>
        <img
          alt= {item.Title}
          src={item.Poster}
          className='max-h-90 w-full object-cover'
        />
        <div className='bg-white dark:bg-gray-800 w-full p-4'>
          <p className='text-green-500 text-md font-medium'>Year: {item.Year}</p>
          <p className='text-gray-800 dark:text-white text-md font-medium mb-2'>
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