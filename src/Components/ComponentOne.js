import React from 'react'
import "./ComponentOne.css"
import illustration from "../UX-UI Developer Test/Assets/ILLUSTRATION.png"
import searchicon from "../UX-UI Developer Test/Assets/searchicon.jpg"


function ComponentOne() {
  return (
    <div className='componentOne'>
        <div className='searchBar-mobile'>
                <img src = {searchicon} alt = "abc" />
                <input type="text" placeholder='Search a Term | Topic'></input> 
            </div>
        <div className='claimQuote'>
            <br /> <br />
            <p id="claimQuote">Claim a Free Quote</p>
            <h1 id="getStarted">Get started on fulfilling<br className='break1'/> your Dubai or UAE <br className='break1' /> dream.</h1>
            <img src = {illustration} alt = "ill" />
            <p id ="Offshore">UAE & Offshore Company</p>
            <h4 id="Info">We provide you with information about UAE or<br className='break1' /> Offshore Company Registration & help you <br className='break1' /> setup your company with a bank account and<br className='break1' /> visas.</h4>
            <button id="startCompany2">Start a Company</button>
            <button id="renewCompany">Renew Company</button>
        </div>
        <div className='searchLogo'>
            <div className='searchBar'>
                <img src = {searchicon} alt = "abc" />
                <input type="text" placeholder='Search a Term | Topic'></input> 
            </div>
            <img src = {illustration} alt = "ill" />
        </div>
        
    </div>
  )
}

export default ComponentOne