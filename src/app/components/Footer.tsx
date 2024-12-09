import React from 'react'

function Footer() {
    return (
        <>
            <div className='flex flex-col items-center lg:space-y-9'>
                <div className='flex lg:flex-col lg:items-center justify-between items-center bg-black text-white p-8 w-[90%] rounded-2xl relative z-10 top-24'>
                    <div className='w-[600px] lg:w-[250px]'>
                        <h1 className='text-5xl lg:text-3xl font-bold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    </div>
                    <div className='flex flex-col space-y-3  lg:justify-center lg:w-[250px] '>
                        <span className='w-[340px] lg:w-[250px]   h-[48px] rounded-full bg-white flex items-center p-5 gap-3 lg:gap-1 ' ><img src="/images/nav/mail.png" alt="" /> <input className='outline-none w-[200px] ' type="text" placeholder='Enter your email address' /></span>
                        
                        <button className='w-[340px] lg:w-[250px] h-[48px] bg-white text-black rounded-full'>Subscribe to Newsletter</button>
                    </div>
                </div>


                <div className='bg-[#F0F0F0] p-20 lg:p-1 space-y-5 w-screen lg:w-auto '>
                    <div className='h-14'></div>

                    <div className='grid grid-cols-5 justify-center space-x-4 lg:grid-cols-2 lg:space-y-5'>

                        <div className='flex flex-col space-y-5 w-56 self-center justify-self-center'>
                            <div>
                                <h1 className='font-bold text-4xl'>SHOP.CO</h1>
                            </div>
                            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div>
                                <span className='flex gap-3 '>
                                    <img src="/images/home/1.png" alt="" />
                                    <img src="/images/home/2.png" alt="" />
                                    <img src="/images/home/3.png" alt="" />
                                    <img src="/images/home/4.png" alt="" />
                                </span>
                            </div>
                        </div>




                        <div className='flex flex-col items-center justify-center space-y-5'>
                            <h1 className='font-bold text-lg'>company</h1>
                            <span className='text-gray-500 text-sm'>About</span>
                            <span className='text-gray-500 text-sm'>Feature</span>
                            <span className='text-gray-500 text-sm'>Works</span>
                            <span className='text-gray-500 text-sm'>career</span>
                        </div>






                        <div className='flex flex-col items-center justify-center space-y-5 '>
                            <h1 className='font-bold text-lg'>Help</h1>
                            <span className='text-gray-500 text-sm'>Customer Support</span>
                            <span className='text-gray-500 text-sm'>Delivery Details</span>
                            <span className='text-gray-500 text-sm'>Terms & Conditions</span>
                            <span className='text-gray-500 text-sm'>Privacy Policy</span>
                        </div>




                        <div className='flex flex-col items-center justify-center space-y-5 '>
                            <h1 className='font-bold text-lg'>FAQ</h1>
                            <span className='text-gray-500 text-sm'>Account</span>
                            <span className='text-gray-500 text-sm'>Manage Deliveries</span>
                            <span className='text-gray-500 text-sm'>Orders</span>
                            <span className='text-gray-500 text-sm'>Payments</span>
                        </div>




                        <div className='flex flex-col items-center justify-center space-y-5 '>
                            <h1 className='font-bold text-lg'>Resources</h1>
                            <span className='text-gray-500 text-sm'>Free eBooks</span>
                            <span className='text-gray-500 text-sm'>Development Tutorial</span>
                            <span className='text-gray-500 text-sm'>How to - Blog</span>
                            <span className='text-gray-500 text-sm'>Youtube Playlist</span>
                        </div>

                    </div>

                    <hr />


                    <div className='flex justify-between items-center lg:flex-col '>
                        <p className='text-gray-500'>Shop.co © 2000-2023, All Rights Reserved</p>
                        <div className='flex gap-3 lg:gap-1  lg:w-screen'>
                            <img src="/images/home/visa.png" alt="" />
                            <img src="/images/home/mcard.png" alt="" />
                            <img src="/images/home/paypal.png" alt="" />
                            <img src="/images/home/apay.png" alt="" />
                            <img src="/images/home/gpay.png" alt="" />
                        </div>



                    </div>






                </div>




            </div>

        </>
    )
}

export default Footer
