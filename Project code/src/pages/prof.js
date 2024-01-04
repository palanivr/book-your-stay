import React from 'react';
import './prof.css';

const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="profile-picture">
        {/* <img src="path_to_image" alt="Profile" /> */}
      </div>
      <div className="profile-info">
        <h2 className="profile-name">Prem</h2>
        <p className="profile-bio" style={{color:"black"}}>Contact: +91xxxxxxxxxx</p>
        <ul className="profile-details">
          <li>
            <span className="profile-detail-label">Current Reservation: Nil</span> 
          </li>
          
          
          
        </ul>
        
        <button className='bg-red-800 text-white-100 py-[8px] px-[12px] rounded-[8px] border border-red-700'>Booking History</button>
      </div>
    </div>
  );
};

export default ProfilePage;