import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import toast from 'react-hot-toast';
const notify = () => toast.error('Please type the name of the movie to search.');

function SearchBar() {
  const { input, setInput } = useContext(DataContext);
  const history = useHistory();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        notify();
        return;
      }
      event.preventDefault();
      history.push("/movies");
    }
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  return (
    <Fragment>
      <div className='bg-transparent px-10 my-4 flex items-center'>
    
        <input
          type='text'
          name='movieTitle'
          className='w-full p-2 h-12'
          value={input.movieTitle}
          onChange={onHandleChange}
          onKeyDown={handleKeyDown}
          placeholder='Search...'
        />
        <Link to='/movies'>
          <button className='bg-red-600 hover:bg-red-900 text-white p-2 pl-4 pr-4 h-12'>
            <p className='font-semibold text-xl'>Search</p>
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default SearchBar;
