import React from 'react'
import './ab.css';
import logo from "../assets/in.png"
const Func= ({isLoggedIn}) => {
  return (
    <div className='a'>



   
    <div className='flex justify-center items-center text-white text-3xl  h-screen passage'>
        <div className='ab'>
    <img src={logo} alt='Logo' width={110} height={52}  loading='lazy' />
    <br></br>
    </div>
<center>  <p> Welcome to book my stay – Your Home Away from Home!<br></br>
Dear Guests,
A warm embrace from all of us at book my stay! We are delighted to welcome you to a place where comfort meets genuine hospitality.
Here, we don't just provide a place to stay; we offer an experience tailored to make you feel at home. Whether you're a seasoned traveler, our doors are open to you.
Thank you for choosing Book my stay. We look forward to being a part of your journey and ensuring your stay is nothing short of exceptional.<br></br>
Warm regards,
The Team Welcome to book my stay – Your Home Away from Home! </p>
             </center>
    </div ></div>
  )
}

export default Func

