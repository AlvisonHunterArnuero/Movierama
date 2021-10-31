import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Fragment>
      <div className='grid place-items-center mt-4'>
        <Link to='/'>
          <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
            </svg>
            <span>Back to Home</span>
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default HomeButton;
