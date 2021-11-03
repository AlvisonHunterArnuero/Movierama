import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Fragment>
      <div className='grid place-items-center md:place-items-end md:mr-12 my-8'>
        <Link to='/homepage'>
          <button className='transition duration-500 ease-in-out bg-blue-400 hover:bg-red-600 text-white transform hover:scale-110 py-3 px-3 rounded inline-flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
            </svg>
            <span>{' '} Back to Home</span>
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default HomeButton;
