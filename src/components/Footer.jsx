import React, { Fragment } from "react";
function Footer() {
  return (
    <Fragment>
      <footer
        className='bg-black font-serif
             text-xl text-white text-center
             border-t-2 border-blue-400
             sticky
             inset-x-0
             bottom-0
             p-4'
      >
        <p className='flex-1 text-yellow-400'>
          Made with React using the{" "}
          <a href='https://omdbapi.com/' target='_blank' rel='noreferrer'>
            OMDb API
          </a>{" "}
        </p>
        <p className='flex-2 text-gray-500'>
          Powered by:{" "}
          <a
            href='http://www.alvisonhunter.com'
            rel='noreferrer'
            target='_blank'
          >
            Alvison Hunter
          </a>{" "}
        </p>
      </footer>
    </Fragment>
  );
}

export default Footer;
