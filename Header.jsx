import React from 'react'
// import {FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          3D Printing

          </h1>
          <div>
      </div>
         
        <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              
            </li>
          </Link>
          <Link to='/sign-up'>
            {/* {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : ( */}
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            {/* )} */}
          </Link>
        </ul>
        </div>
    </header>
  )
}