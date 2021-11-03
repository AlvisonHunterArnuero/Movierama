import React, { Fragment } from "react";
function Footer() {
  return (
    <Fragment>
      <footer
        className='bg-black font-sans
             text-center
             sticky
             inset-x-0
             bottom-0
             p-4 flex flex-wrap text-sm border-t-2 border-blue-400'
      >
        <p className='flex-auto text-yellow-600'>
          Made with React using the{" "}
          <a href='https://omdbapi.com/' target='_blank' rel='noreferrer'>
            OMDB API
          </a>{" "}
        </p>
        <p className='flex-auto text-red-500 hover:text-blue-800'>
          Powered by:
          <a
            href='http://www.alvisonhunter.com'
            rel='noreferrer'
            target='_blank'
          >
            {" "}
            Alvison Hunter
          </a>
        </p>
      </footer>
    </Fragment>
  );
}

export default Footer;
