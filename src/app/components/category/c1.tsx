import React from 'react'

function c1() {
    return (
        <>
            <div className='px-16 py-4'>
                <div className='space-y-3'>
                    Home &gt; Casual
                </div>

                <div className='p-3 flex gap-6'>

                    <div className='w-[25%] flex flex-col border lg:hidden'>
                        <div className=' space-y-5 '>
                            <span className='flex justify-between items-center p-5'>
                                <span>Filters</span>
                                <span><img src="/images/category/filter.png" alt="" /></span>

                            </span>

                        </div>

                        <hr />

                        <div>

                            <div className='flex justify-between items-center p-3 text-gray-500'>
                                <span>T-shirts</span>
                                <img src="/images/category/right.png" alt="" />
                            </div>


                            <div className='flex justify-between items-center p-3 text-gray-500'>
                                <span>Shorts</span>
                                <img src="/images/category/right.png" alt="" />
                            </div>


                            <div className='flex justify-between items-center p-3 text-gray-500'>
                                <span>Shirts</span>
                                <img src="/images/category/right.png" alt="" />
                            </div>


                            <div className='flex justify-between items-center p-3 text-gray-500'>
                                <span>Hoodie</span>
                                <img src="/images/category/right.png" alt="" />
                            </div>


                            <div className='flex justify-between items-center p-3 text-gray-500'>
                                <span>Jeans</span>
                                <img src="/images/category/right.png" alt="" />
                            </div>
                        </div>

                        <hr />

                        <div>
                            <div className='flex justify-between items-center p-3 '>
                                <span className='font-bold text-lg'>Price</span>
                                <img src="/images/category/up.png" alt="" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src="/images/category/slider.png" alt="" />
                                <div className='w-auto flex justify-around gap-28'>

                                    <div>$50</div>

                                    <div>$200</div>

                                </div>
                            </div>

                        </div>



                        <hr />

                        <div>
                            <div className='flex justify-between items-center p-3 '>
                                <span className='font-bold text-lg'>Color</span>
                                <img src="/images/category/up.png" alt="" />
                            </div>

                            <div className='grid grid-cols-5 grid-rows-2 justify-center items-center p-1 gap-3'>
                                <span className='w-9 h-9 bg-[#00C12B] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#F50606] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#F5DD06] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#F57906] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#06CAF5] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#063AF5] rounded-full border flex items-center justify-center'><img src="/images/category/Vector.png" alt="" /></span>
                                <span className='w-9 h-9 bg-[#7D06F5] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#F506A4] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#FFFFFF] rounded-full border'></span>
                                <span className='w-9 h-9 bg-[#000000] rounded-full border'></span>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <div className='flex justify-between items-center p-3 '>
                                <span className='font-bold text-lg'>Size</span>
                                <img src="/images/category/up.png" alt="" />
                            </div>

                            <div className='grid grid-cols-2 gap-2 p-2 '>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>XX-Small</span>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>X-Small</span>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>Small</span>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>Medium</span>
                                <span className='w-24 h-10 bg-black text-white rounded-full flex items-center justify-center'>Large</span>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>X-Large</span>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>XX-Large</span>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>3X-Large</span>
                                <span className='w-24 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center'>4X-Large</span>

                            </div>





                            <div>
                                <div className='flex justify-between items-center p-3 '>
                                    <span className='font-bold text-lg'>Dress Style</span>
                                    <img src="/images/category/up.png" alt="" />
                                </div>

                                <div className='flex justify-between items-center p-3 text-gray-500'>
                                    <span>Casual</span>
                                    <img src="/images/category/right.png" alt="" />
                                </div>


                                <div className='flex justify-between items-center p-3 text-gray-500'>
                                    <span>Formal</span>
                                    <img src="/images/category/right.png" alt="" />
                                </div>


                                <div className='flex justify-between items-center p-3 text-gray-500'>
                                    <span>Party</span>
                                    <img src="/images/category/right.png" alt="" />
                                </div>


                                <div className='flex justify-between items-center p-3 text-gray-500'>
                                    <span>Gym</span>
                                    <img src="/images/category/right.png" alt="" />
                                </div>



                            </div>



                        </div>



                        <div className='flex items-center justify-center'>
                            <button className='w-60 h-12 bg-black text-white rounded-full'>Apply Filter</button>
                        </div>


                    </div>


                    <div className='w-[75%] flex flex-col space-y-5'>





                        <div className=' flex justify-between'>
                            <div className='font-bold text-2xl lg:text-xl'>Casual</div>
                            <div className='flex gap-2 items-center'>
                                <div className='lg:text-xs'>Showing 1-10 of 100 Products</div>
                                <div className='lg:hidden'>Sort by: <b>Most Popular</b></div>
                                <div className='lg:hidden' ><img src="/images/category/down.png" alt="" /></div>
                            </div>
                        </div>


                        <div className='grid grid-cols-3 justify-center items-center gap-5 lg:grid-cols-2'>


                            <div>
                                <img src="/images/detail/2.png" alt="" />
                                <p className='text-lg font-bold'>Gradient Graphic T-shirt</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/3.5stars.png" alt="" />
                                    <span>3.5 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl font-bold'>$145</div>


                            </div>






                            <div>
                                <img src="/images/detail/3.png" alt="" />
                                <p className='text-lg font-bold'>Polo with Tipping Details</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/frame.png" alt="" />
                                    <span>4.5 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl font-bold'>$180</div>

                            </div>










                            <div>
                                <img src="/images/detail/4.png" alt="" />
                                <p className='text-lg font-bold'>Black Striped T-shirt</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/5stars.png" alt="" />
                                    <span>5.0 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl flex font-bold space-x-3'>
                                    <span>$120</span>
                                    <span className='line-through text-gray-500 '>$150</span>
                                    <span className='bg-red-200 text-red-500 text-md rounded-full w-[58px] h-[28px] text-sm flex items-center justify-center '>-30%</span>
                                </div>

                            </div>



                            <div>
                                <img src="/images/category/p1.png" alt="" />
                                <p className='text-lg font-bold'>SKINNY FIT JEANS</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/3.5stars.png" alt="" />
                                    <span>3.5 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl flex font-bold space-x-3'>
                                    <span>$240</span>
                                    <span className='line-through text-gray-500 '>$260</span>
                                    <span className='bg-red-200 text-red-500 text-md rounded-full w-[58px] h-[28px] text-sm flex items-center justify-center '>-20%</span>
                                </div>

                            </div>



                            <div>
                                <img src="/images/category/s2.png" alt="" />
                                <p className='text-lg font-bold'>CHECKERED SHIRT</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/4.5stars.png" alt="" />

                                    <span>4.5 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl font-bold'>$180</div>

                            </div>





                            <div>
                                <img src="/images/category/s3.png" alt="" />
                                <p className='text-lg font-bold'>T-SHIRT WITH TAPE DETAILS</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/frame.png" alt="" />

                                    <span>4.5 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl flex font-bold space-x-3'>
                                    <span>$130</span>
                                    <span className='line-through text-gray-500 '>$160</span>
                                    <span className='bg-red-200 text-red-500 text-md rounded-full w-[58px] h-[28px] text-sm flex items-center justify-center '>-30%</span>
                                </div>

                            </div>




                            <div className='lg:hidden'>
                                <img src="/images/category/s4.png" alt="" />
                                <p className='text-lg font-bold'>VERTICAL STRIPED SHIRT</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/5stars.png" alt="" />

                                    <span>5.0 <span className='text-gray-400'>/5</span></span>
                                </div>


                                <div className='text-2xl flex font-bold space-x-3'>
                                    <span>$212</span>
                                    <span className='line-through text-gray-500 '>$232</span>
                                    <span className='bg-red-200 text-red-500 text-md rounded-full w-[58px] h-[28px] text-sm flex items-center justify-center '>-20%</span>
                                </div>



                            </div>




                            <div className='lg:hidden'>
                                <img src="/images/category/s5.png" alt="" />
                                <p className='text-lg font-bold'>COURAGE GRAPHIC T-SHIRT</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/category/4stars.png" alt="" />

                                    <span>4.0 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl font-bold'>$145</div>

                            </div>



                            <div className='lg:hidden'>
                                <img src="/images/category/p2.png" alt="" />
                                <p className='text-lg font-bold'>LOOSE FIT BERMUDA SHORTS</p>
                                <div className=' flex gap-1'>
                                    <img src="/images/home/star-1.png" alt="" />
                                    <img src="/images/home/star-1.png" alt="" />
                                    <img src="/images/home/star-1.png" alt="" />
                                    <span>3.0 <span className='text-gray-400'>/5</span></span>
                                </div>

                                <div className='text-2xl font-bold'>$80</div>

                            </div>





                        </div>


                        <hr />



                        <div className='flex justify-evenly items-center'>
                            <div className='w-28 h-9 flex items-center justify-around border rounded-xl'>
                                <img src="images/category/back.png" alt="" />
                                <span>Previous</span>
                            </div>
                            <div className='flex gap-2 items-center justify-center'>
                                <div className='w-10 h-10 flex items-center justify-center bg-[#F0F0F0]'>1</div>
                                <div className='w-10 h-10 flex items-center justify-center '>2</div>
                                <div className='w-10 h-10 flex items-center justify-center '>3</div>
                                <div className='w-10 h-10 flex items-center justify-center '>...</div>
                                <div className='w-10 h-10 flex items-center justify-center '>8</div>
                                <div className='w-10 h-10 flex items-center justify-center '>9</div>
                                <div className='w-10 h-10 flex items-center justify-center '>10</div>
                            </div>
                            <div className='w-28 h-9 flex items-center justify-around border rounded-xl'>
                                <span>Next</span>
                                <img src="images/category/4wd.png" alt="" />
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default c1
