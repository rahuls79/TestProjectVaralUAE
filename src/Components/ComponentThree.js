import React from 'react'
import './ComponentThree.css'
import bankaccount from "../UX-UI Developer Test/Assets/ILLUSTRATION03.png"
import uaecompany from "../UX-UI Developer Test/Assets/Group-2.png"
import advice from "../UX-UI Developer Test/Assets/Group.png"
import registration from "../UX-UI Developer Test/Assets/Group-1.png"
import arrow from "../UX-UI Developer Test/Assets/Vector.png"

function ComponentThree() {
  return (
    <div className='componentThree'>
        <div className='firstHalf'>
            <div className='quoteText'>
                <p id='quote'>Learn the ways in which you can benefit <br />
                    from a UAE/Offshore Company. Then get <br />
                    started on fulfilling your UAE dream.</p>
                <p id='claimQuote'>Claim a Free Quote</p>
            </div>
            <div className='adviceGuidance' id="advG-Top">
                <img src={advice} alt="advice" />
                <h4 className='advice'>Advice & Guidance</h4>
                <p>All activities in the UAE are licensed. Whether manufacturing, finance, <br />
                    trading, marketing, consultancy or <br />
                    restaurants. In some countries only <br />
                    manufacturing is licensed. In others <br />
                    there is a threshold below which <br />
                    business are encouraged. Get our <br />
                    insightfull guidance today. </p>
                    <br />
                    <p id="learn">Learn More</p>
                    <img src={arrow} id="arrowImage" alt="arrow" />
            </div>
            <div className='bankAccountSetup'>
                <img src={bankaccount} alt="bacc" />
                <h4 className='bankaccount'>Bank Account Setup</h4>
                <p>There are many banks in the United <br />
                    Arab Emirates [UAE]. Both locally <br />
                    owned and branches of <br />
                    multinational ones. Foreign banks <br />
                    adjust according to their parent's <br />
                    strategies and have changed local <br />
                    requirements overnight in the past. <br />
                    But we are here to help you.</p>
                    <br />
                    <p id="learn">Learn More</p>
                    <img src={arrow} id="arrowImage" alt="arrow" />
            </div>
            <div className='uaeCompanySetup'>
            <img src={uaecompany} alt="uaec" />
                <h4 className='uaecompany'>UAE Company Visas</h4>
                <p>Your application for visas is critical <br />
                    especially if you intend to move to <br />
                    Dubai. This becomes even more <br />
                    urgent if your family will also move <br />
                    with you. All the paperwork is done <br />
                    on your behalf smoothly so that you <br />
                    may only focus on doing what <br />
                    matters most to you </p>
                    <br />
                    <p id="learn">Learn More</p>
                    <img src={arrow} id="arrowImage" alt="arrow" />
            </div>
        </div>
        <div className='secondHalf'>
            <div className='adviceGuidance'>
                <img src={advice} alt="advice" />
                <h4 className='advice'>Advice & Guidance</h4>
                <p>All activities in the UAE are licensed. Whether manufacturing, finance, <br />
                    trading, marketing, consultancy or <br />
                    restaurants. In some countries only <br />
                    manufacturing is licensed. In others <br />
                    there is a threshold below which <br />
                    business are encouraged. Get our <br />
                    insightfull guidance today. </p>
                    <br />
                    <p id="learn">Learn More</p>
                    <img src={arrow} id="arrowImage" alt="arrow" />
            </div>
            <div className='registration'>
                <img src={registration} alt="reg" />
                <h4 className='regiHead'>Registration Document <br />Preparation</h4>
                <p>Several documents must be <br />
                    prepared to start the process of <br />
                    registering a new company in the <br />
                    United Arab Emirates. Be it a Dubai <br />
                    local company,a free zone one or an <br />
                    offshore entity. Your registered agent is dedicated to get this done <br /> 
                    for you for a seamless process.</p>
                    <br />
                    <p id="learn">Learn More</p>
                    <img src={arrow} id="arrowImage" alt="arrow" />
            </div>
            <div className='quoteText2'>
                <p>We have gathered a team of <br />
                    professionals to craft adequate <br />
                    services you can rely on for a friction <br />
                    free setup in UAE.</p>
                <p id="moreServices">More about our Services</p>
                <img src={arrow} id="arrow2" alt="arrow" />
            </div>
        </div>
    </div>
  )
}

export default ComponentThree;