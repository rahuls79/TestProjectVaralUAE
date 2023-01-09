import React from 'react'
import "./ComponentFive.css"
import line from "../UX-UI Developer Test/Assets/line.png"
import vector from "../UX-UI Developer Test/Assets/Vector-4.png"
import user from "../UX-UI Developer Test/Assets/Vector-3.png"
import horLine from "../UX-UI Developer Test/Assets/horLine.png"
import arrow from "../UX-UI Developer Test/Assets/Group34.png"
import fb from "../UX-UI Developer Test/Assets/Vector-5.png"
import insta from "../UX-UI Developer Test/Assets/Vector-6.png"
import yt from "../UX-UI Developer Test/Assets/Vector-7.png"
import linkedIN from "../UX-UI Developer Test/Assets/Vector-8.png"

function ComponentFive() {
  return (
    <div className='ComponentFive'>
        <div className='firstHalfFive'>
            <div className='readBlog'>
                <img src = {line} alt="line" id='line' />
                <h5>Read about our blogs for more <br />
                 information on our processes</h5>
            </div>
            <div className='companyFormation'>
                <img src={vector} alt="vec" id="vector" />
                <div className='data'>
                    <div className='heading-data'>
                        <h5>How to start a company <br /> formation in Dubai</h5>
                    </div>
                    <div className='datap-data'>
                        <p>5 Minutes</p>
                        </div>
                </div>
            </div>
            <div className='offshoreCompanyFormation'>
            <img src={vector} alt="vec" id="vector" />
                <div className='data'>
                    <div className='heading-data'>
                        <h5>How to start an Offshore <br /> company formation in Dubai</h5>
                    </div>
                    <div className='datap-data'>
                        <p>5 Minutes</p>
                        </div>
                </div>
            </div>
            <div className='seoDubai'>
                <img src={vector} alt="vec" id="vector" />
                <div className='data'>
                    <div className='heading-data'>
                        <h5>SEO Dubai : Who Benefits <br /> the most?</h5>
                    </div>
                    <div className='datap-data'>
                        <p>5 Minutes</p>
                        </div>
                </div>
            </div>
            <div className='satisfied'>
                <img src = {line} alt="line" id='line' />
                <h5>Satisfied we are When our <br />
                 Customers are happy</h5>
            </div>
            <div className='review1'>
                <div className='review-image'>
                    <img src={user} alt="user" id="user" />
                    <img src={horLine} alt="horLine" id="horizontalLine" />
                </div>
                <div className='review-data'>
                    <p>"I am very happy with them. I'll <br />
                        continue to use their services in <br />
                        future & highly recommend <br />
                        them to anyone"</p>
                {/* </div>
                <div className='datap-data'> */}
                    <h5>Muhib Abrar</h5>
                </div>
            </div>

            <div className='review1'>
                <div className='review-image'>
                    <img src={user} alt="user" id="user" />
                    <img src={horLine} alt="horLine" id="horizontalLine" />
                </div>
                <div className='review-data'>
                    <p>"Rama has a high level of integrity,<br />
                    intellect, knowledge of his <br />
                    business, resourcefulness and <br />
                    humanity"</p>
                {/* </div>
                <div className='datap-data'> */}
                    <h5>Colin Salhadna</h5>
                </div>
            </div>

            <div className='review1'>
                <div className='review-image'>
                    <img src={user} alt="user" id="user" />
                    <img src={horLine} alt="horLine" id="horizontalLine" />
                </div>
                <div className='review-data'>
                    <p>"Your advise was so complete that I <br />
                        actually realized how beneficial <br />
                    this would be to my clients and my <br />
                    business."</p>
                {/* </div>
                <div className='datap-data'> */}
                    <h5>Mark Swann</h5>
                </div>
            </div>
            
        </div>
        <div className='secondHalfFive'>
            <div className='knowUs'>
                <img src = {line} alt="line" id='line' />
                <h5>Get to know the whole us and <br />
                    more of our services</h5>
            </div>
            <div className='services'>
                <h5>Services</h5>
                <p>Products</p>
                <p>Solutions</p>
                <p>Assurance</p>
                <p>FAQ</p>
                <p>Working at Varal-Singhania</p>
            </div>
            <div className='policies'>
                <h5>Policies</h5>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <div className='about'>
                <h5>About</h5>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className='Address'>
                <h5>Address</h5>
                <p>608 One Lake Plaza, Cluster T,<br />
                Al Sarayat Street, Jumeirah <br />
                Lake Towers<br />
                Dubai<br />
                United Arab Emirates</p>
            </div>
            <div className='timing'>
                <p>Office Hours: Sunday to <br />
                Thursday 8:30 AM to 6:30 PM <br />
                [GMT+4] <br />
                M: +971 55 794 2016 <br />
                O: +971 4 447 2061</p>
            </div>
            <div className='Subscribe'>
                <h5>Subscribe Now</h5>
                <p>Subscribe now to receive our <br />
                Newsletters about amazing <br />
                opportunities in Dubai</p>
            </div>
            <div className='EmailSearch'>
                <input type="email" placeholder="Enter Email Address" id='emailSearch'></input>
                <img src={arrow} alt="arrow" id="email-arrow"/>
            </div>
            <div className='social'>
                <img src={fb} alt = "fb" />
                <img src={insta} alt = "insta" />
                <img src={linkedIN} alt = "linkedIN" />
                <img src={yt} alt = "yt" />
            </div>
        </div>
        <div className='secondHalfFive-mobile'>
            <div className='secondHalfFive-mobile-left'>
                <div className='services'>
                    <h5>Services</h5>
                    <p>Products</p>
                    <p>Solutions</p>
                    <p>Assurance</p>
                    <p>FAQ</p>
                    <p>Working at Varal-Singhania</p>
                </div>
                <div className='about'>
                    <h5>About</h5>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div className='Subscribe'>
                    <h5>Subscribe Now</h5>
                    <p>Subscribe now to receive our <br />
                    Newsletters about amazing <br />
                    opportunities in Dubai</p>
                </div>
                <div className='EmailSearch'>
                    <input type="email" placeholder="Enter Email Address" id='emailSearch'></input>
                    <img src={arrow} alt="arrow" id="email-arrow"/>
                </div>
            </div>
            <div className='seconfHalfFive-mobile-right'>
                <div className='policies'>
                    <h5>Policies</h5>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className='Address'>
                    <h5>Address</h5>
                    <p>608 One Lake Plaza, Cluster T,<br />
                    Al Sarayat Street, Jumeirah <br />
                    Lake Towers<br />
                    Dubai<br />
                    United Arab Emirates</p>
                </div>
                <div className='social'>
                    <img src={fb} alt = "fb" />
                    <img src={insta} alt = "insta" />
                    <img src={linkedIN} alt = "linkedIN" />
                    <img src={yt} alt = "yt" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComponentFive