import React from 'react'
import Backend from './Backend'
import Design from './Design'
import Frontend from './Frontend'
import Header from './Header'
import Nav from './Nav'
import Service from './Service'
import Solution from './Solution'
import Technologi from './Technologi'
import Testimonials from './Testimonials'


function All() {
  return (
    <div>
        <Nav/>
        <Header/>
        <Service/>
        <Solution/>
        <Technologi/>
        

    </div>
  )
}

export default All