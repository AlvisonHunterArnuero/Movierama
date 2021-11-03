import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <Fragment>
      <main className='h-screen flex items-center px-6 lg:px-32 bg-black text-white relative'>
        <header className='w-full absolute left-0 top-0 p-6 lg:p-32'></header>
        <section className='w-full md:w-9/12 xl:w-8/12'>
          <span className='font-bold uppercase tracking-widest'>
            Welcome to the world of
          </span>
          <h1 className='text-5xl sm:text-7xl lg:text-9xl font-bold text-pink-500 hover:text-green-400'>
            <Link to='/homepage'>Movierama</Link>
          </h1>
          <p className='font-light text-xl mb-1 text-yellow-300'>
            Why? Because I friggin' love movies, ReactJS, Context API & TailwindCSS.
          </p>
          <p className='text-gray-400'>What else could you possibly ask for, <span className='font-semibold text-green-300'>dude?</span></p>
        </section>
        <footer className='absolute right-0 bottom-0 p-6 lg:p-32'>
          <p className='font-bold mb-1 text-gray-500'>Yours Truly</p>
          <p>Alvison Hunter (Front-End Engineer)</p>
          <p className='text-blue-400 hover:text-red-500'>
            <a href='https://alvisonhunter.com/'>
              https://alvisonhunter.com/
            </a>
          </p>
        </footer>
      </main>
    </Fragment>
  );
}

export default Welcome;
