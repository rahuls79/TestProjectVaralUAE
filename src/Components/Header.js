import React from 'react'
import logo from "../UX-UI Developer Test/Assets/Group114.png"
import "./Header.css"

function Header() {
    <link href='https://fonts.googleapis.com/css?family=Lexend Deca' rel='stylesheet'></link>
  return (
    <div className='Header-full'>
        <div className='Header-logo'>
            <img src = {logo} alt = "abc" />
        </div>
        <div className='Header-buttons'>
            <button>Home</button>
            <button>Services</button>
            <button>Pricing</button>
            <button>About Us</button> 
            <button id="startCompany">Start a Company</button>
        </div>

        <div className='dropdown'>
            <button>Home</button>
            <button>Services</button>
            <button>Pricing</button>
            <button>About Us</button> 
            <button id="startCompany">Start a Company</button>
        </div>
        <div className='menu-buttons'>
            <button id='menu'>☰</button>
        </div>
    </div>
  )
}

export default Header