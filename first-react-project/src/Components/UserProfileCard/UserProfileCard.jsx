import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/me.jpeg'

const UserProfileCard = () => {
  return (
    <div className='upc'> 
    <div className="gradiant"></div>
     <div className="profile-down"> 
     <img src ={profile_icon} alt= ""></img>
     <div className="profile-title">Riya Sudrik</div>
     <div className="profile-description">
    <p>Student at MIT ADTU</p>
     </div>
     <div className="profile-button"><a href = "mailto: riyasudrik03@gmail.com">Contact me</a></div>
     </div>
     </div>

  )
}

export default UserProfileCard
