import React from 'react'
import "./BackgroundImage.css"
import smallestGrayEllipse from "../UX-UI Developer Test/Assets/Ellipse 16.png"
import secondGrayEllipse from "../UX-UI Developer Test/Assets/Ellipse 25.png"
import smallestYellowEllipse from "../UX-UI Developer Test/Assets/Ellipse 21.png"
import thirdGrayEllipse from "../UX-UI Developer Test/Assets/Ellipse 19.png"
import bigCircle from "../UX-UI Developer Test/Assets/Ellipse 17.png"
import secondYellowEllipse from "../UX-UI Developer Test/Assets/Ellipse 24.png"
import bigBrownEllipse from "../UX-UI Developer Test/Assets/Ellipse7.png"



function BackgroundImage() {
  return (
    <div>
      <img src={smallestGrayEllipse} id="smGE1" alt="bbw" />
      <img src={secondGrayEllipse} id="scGE1" alt="scGE" />
      <img src={smallestYellowEllipse}  id="smYE1" alt = "smy" />
      <img src={thirdGrayEllipse} id="tGE1" alt="tge" />
      <img src={bigCircle} id="bC1" alt="bc" />
      <img src={secondYellowEllipse} id="sYE1" alt="sye" />
      <img src={secondGrayEllipse} id="scGE2" alt="scGE" />
      <img src={secondYellowEllipse} id="sYE2" alt="sye" />
      <img src={thirdGrayEllipse} id="tGE2" alt="tge" />
      <img src={bigBrownEllipse} id="bBE1" alt="bbw" />
      <img src={thirdGrayEllipse} id="tGE3" alt="tge" />
      <img src={bigCircle} id="bC3" alt="bc" />
      
    </div>
  )
}

export default BackgroundImage