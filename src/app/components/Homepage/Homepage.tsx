import React from 'react'
import Navbar from '../Navbar'
import Hfirst from './Hfirst'
import Hsecond from './Hsecond'
import Hthird from './Hthird'
import Hforth from './Hforth'
import Hfifth from './Hfifth'
import Footer from '../Footer'


function Homepage() {
  return (
    <>
    <div className='overflow-x-hidden'>

    <Navbar></Navbar>
    <Hfirst></Hfirst>
    <Hsecond></Hsecond>
    <Hthird></Hthird>
    <Hforth></Hforth>
    <Hfifth></Hfifth>
    <Footer></Footer>
    </div>
    </>
  )
}

export default Homepage
