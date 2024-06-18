import React from 'react'
import WWE from '../Components/IMAGE/download.png'
const Nav = () => {
  return (
    <div className='body'>
      <div className="nav-head">
        <img className='img-rounded' width={80} src={WWE} alt="" />
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item">About</li> 
          <li className="nav-item">Contact Me📞</li> 
        </ul>
      </div>
    </div>
  )
}

export default Nav
