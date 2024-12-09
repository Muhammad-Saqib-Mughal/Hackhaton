import React from 'react'
import C1 from '../components/category/c1'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function page() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar></Navbar>
            <C1></C1>
            <Footer></Footer>
        </div>
    )
}

export default page
