import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/1685949124375.jpeg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from 'react-icons/fa6';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar)
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [currentPassword,setCurrentPassword] =useState('')
  const [newPassword,setNewPassword] =useState('')
  const [confirmPassword,setConfirmNewPassword] =useState('')





  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className='btn'>My posts</Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
          
            </div>
            <form className='avatar__form'>
              <input type="file" name="avatar" id="avatar" onChange={e => setAvatar(e.target.files[0])} accept="png,jpg,jpeg"/>
              <label htmlFor='avatar'><FaEdit/></label>
            </form>
            
          </div>

          <h1 className='txt-style' id='profile-photo'>Rohan Vohra</h1>

          <form className="form profile__form">
            { /*<p className="form__error-message">This is a error message</p> */}
            <input type='text' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
            <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type='password' placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type='submit' className='btn primary'>Update Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile