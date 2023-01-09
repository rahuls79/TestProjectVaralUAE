import React from 'react'
import ComponentFive from './ComponentFive.js'
import ComponentFour from './ComponentFour.js'
import ComponentOne from './ComponentOne.js'
import ComponentThree from './ComponentThree.js'
import ComponentTwo from './ComponentTwo.js'
import Footer from './Footer.js'
import Header from "./Header.js"

function HomePage() {
  return (
    <div>
        <Header />
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
        <ComponentFour />
        <ComponentFive />
        <Footer />
    </div>
  )
}

export default HomePage