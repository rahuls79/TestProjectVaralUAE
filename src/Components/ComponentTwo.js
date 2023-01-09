import React from 'react'
import videopic from "../UX-UI Developer Test/Assets/Group117.png"
import "./ComponentTwo.css"
import uae from "../UX-UI Developer Test/Assets/dungeon.png"
import dubai from "../UX-UI Developer Test/Assets/Vector-2.png"
import offshore from "../UX-UI Developer Test/Assets/Vector-1.png"

function Component2() {
  return (
    <div className='ComponentTwo'>
        <div className='videoLine'>
            <p id="videoLine">Watch the video about UAE or Offshore Company Registration</p>
            {/* <br className='break1' /> */}
            <img src={videopic} alt="vid" />
            <br></br>
        </div>
        <div className='missionTag'>
          <h2>Dedicated <br />to our mission we are</h2>
          <p>Our services include Company Formation & Renewals,<br /> Trust & Fiduciary, Tax Residency Setup With Family, Bank<br />Accounts, Remote Management, Stock Trading 
<br />Platforms, Ownership Solutions</p>
        </div>
        <div className='companies'>
          <div className='companyZoneOne'>
          <img src = {uae} alt = "uae" />
          <br />
          <h3>UAE Free Zone Company</h3>
          {/* <br /> */}
          <p>Your registration agent, will answer all <br /> 
            of your questions and help you to reach <br />
            a conclusion that meets your objectives <br />
            of investing in the UAE.</p>
            {/* <br /> */}
            <p id="getStarted2">Get Started</p>
          </div>
          <div className='companyZoneTwo'>
            <img src = {dubai} alt="dubai" />
            <br />
            <h3>Dubai Local Companies</h3>
            {/* <br /> */}
            <p>The Dubai LLC formation documents <br />
              are actually articles of organization or a <br />
              certificate of organization. You can get <br />
              yours today.</p>
              {/* <br /> */}
            <p id="getStarted2">Get Started</p>
          </div>
          <div className='companyZoneThree'>
            <img src = {offshore} alt="off" />
            <br />
            <h3>Offshore Companies</h3>
            {/* <br /> */}
            <p>You can register an offshore company <br />
              and open its bank account in Dubai. Your agent will help you along all the <br />
              process</p>
              {/* <br /> */}
            <p id="getStarted2">Get Started</p>
          </div>
        </div>
    </div>
  )
}

export default Component2