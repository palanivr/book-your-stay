import { Link } from 'react-router-dom';
import React from 'react'
import './ho.css';
// import { Link } from 'react-router-dom';
const Home = ({isLoggedIn}) => {
  return (
    <div className='h'>
    <div className='flex justify-center items-center text-white text-3xl  h-screen'>
   <Link to={"/bok"}> <button className='bg-red-800 text-white-100 py-[8px] px-[12px] rounded-[8px] border border-red-700' style={{marginLeft:'60px'}}>
                   Reserve Now
                 </button></Link>
    </div></div>
  )
}

export default Home