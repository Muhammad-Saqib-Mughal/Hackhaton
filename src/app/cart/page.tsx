import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Cart() {
    return (
        <>
        <div className='overflow-x-hidden'>

            <Navbar></Navbar>

            <div className='p-5'>

                <div className='px-12'> Home &gt; Cart </div>
                <div className='font-bold text-4xl px-12'>Your cart</div>

                <div className='flex gap-4 lg:flex-col'>
                    <div className='space-y-4 border w-[55vw] lg:w-[90vw] p-8 lg:p-0 rounded-2xl'>
                        <div className=' lg:w-[100%] flex gap-4'>
                            <div><img src="/images/cart/1.png" alt="" /></div>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    <div>Gradient Graphic T-shirt</div>
                                    <div><img src="/images/cart/bin.png" alt="" /></div>
                                </div>

                                <div className='text-gray-500'>
                                    <span className='font-bold text-black'>Size:</span>
                                    Large</div>

                                <div className='text-gray-500'>
                                    <span className='font-bold text-black'>Color:</span>
                                    White</div>
                                <div className='flex justify-between items-center'>
                                    <div className='text-2xl font-bold'>$145</div>
                                    <div className='w-32 h-11 border rounded-full flex items-center justify-around'>
                                        <img src="/images/cart/minus.png" alt="" />
                                        <div>1</div>
                                        <img src="/images/cart/plus.png" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>


                        <hr />



                        <div className='  lg:w-auto flex gap-4'>
                            <div><img src="/images/cart/2.png" alt="" /></div>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    <div>CHECKERED SHIRT</div>
                                    <div><img src="/images/cart/bin.png" alt="" /></div>
                                </div>

                                <div className='text-gray-500'>
                                    <span className='font-bold text-black'>Size:</span>
                                    Medium</div>

                                <div className='text-gray-500'>
                                    <span className='font-bold text-black'>Color:</span>
                                    Red</div>
                                <div className='flex justify-between items-center'>
                                    <div className='text-2xl font-bold'>$180</div>
                                    <div className='w-32 h-11 border rounded-full flex items-center justify-around'>
                                        <img src="/images/cart/minus.png" alt="" />
                                        <div>1</div>
                                        <img src="/images/cart/plus.png" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>


                        <hr />




                        <div className=' lg:w-auto flex gap-4'>
                            <div><img src="/images/cart/3.png" alt="" /></div>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    <div>SKINNY FIT JEANS</div>
                                    <div><img src="/images/cart/bin.png" alt="" /></div>
                                </div>

                                <div className='text-gray-500'>
                                    <span className='font-bold text-black'>Size:</span>
                                    Large</div>

                                <div className='text-gray-500'>
                                    <span className='font-bold text-black'>Color:</span>
                                    Blue</div>
                                <div className='flex justify-between items-center'>
                                    <div className='text-2xl font-bold'>$240</div>
                                    <div className='w-32 h-11 border rounded-full flex items-center justify-around'>
                                        <img src="/images/cart/minus.png" alt="" />
                                        <div>1</div>
                                        <img src="/images/cart/plus.png" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>


                    <div className='w-[45vw] lg:w-auto border p-5 space-y-5'>
                        <div className='space-y-5'>
                            <div className='text-2xl font-bold'>Order Summary</div>
                            <div className='flex justify-between items-center'>
                                <span className='text-gray-500'>Subtotal</span>
                                <span className='text-xl font-bold'>$565</span>
                            </div>

                            <div className='flex justify-between items-center'>
                                <span className='text-gray-500'>Discount (-20%)</span>
                                <span className='text-xl font-bold text-[#FF3333]'>$113</span>
                            </div>

                            <div className='flex justify-between items-center'>
                                <span className='text-gray-500'>Delivery Fee</span>
                                <span className='text-xl font-bold'>$15</span>
                            </div>

                            <hr />

                            <div className='flex justify-between items-center'>
                                <span className='text-gray-700 text-xl'>Total</span>
                                <span className='text-2xl font-bold'>$467</span>
                            </div>



                        </div>


                        <div className='flex justify-center gap-5'>
                            <span className='w-80 h-12 bg-[#F0f0F0] rounded-full flex items-center gap-3 p-3'><img src="/images/cart/vector.png" alt="" /><input className='bg-[#F0f0F0] outline-none' type="text" placeholder='Add promo code' /></span>
                            <button className='bg-black text-white rounded-full w-28 h-12'>Apply</button>
                        </div>

                        <div className='justify-self-center w-11/12 h-14 '>

                            <div className='bg-black text-white w-11/12 h-14 rounded-full flex justify-center items-center' >
                                <span>Go to Checkout</span>
                                <span><img src="/images/cart/forward.png" alt="" /></span>
                            </div>
                        </div>




                    </div>
                </div>


            </div>



        <Footer></Footer>
        </div>


        </>
    )
}

export default Cart
