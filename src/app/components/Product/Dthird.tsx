import React from 'react'

function Dthird() {
  return (
    <>
    
    <div className=' flex flex-col items-center space-y-10 lg:w-[90vw]'>
                    <div>
                        <h1 className='text-5xl lg:text-3xl font-bold'>You might also like</h1>
                    </div>
                    <div className='grid grid-cols-4 items-center justify-center gap-6 lg:grid-cols-2 '>


                        <div className='w-auto'>
                            <img src="/images/detail/1.png" alt="" />
                            <p className='text-xl font-bold'>Polo with Contrast Trims</p>
                            <div className=' flex gap-1 lg:w-20 lg:h-8 items-center'>
                                <img src="/images/detail/4stars.png" alt="" />
                                <span className='flex'>4.0 <span className='text-gray-400'>/5</span></span>
                            </div>

                            <div className='text-2xl lg:text-xl flex font-bold space-x-3'>
                                <span>$212</span>
                                <span className='line-through text-gray-500 '>$242</span>
                                <span className='bg-red-200 text-red-500 text-md rounded-full w-[58px] h-[28px] text-sm flex items-center justify-center '>-20%</span>
                            </div>

                        </div>




                        <div className='w-auto'>
                            <img src="/images/detail/2.png" alt="" />
                            <p className='text-xl font-bold'>Gradient Graphic T-shirt</p>
                            <div className=' flex gap-1 lg:w-20 lg:h-8 items-center '>
                                <img src="/images/detail/3.5stars.png" alt="" />
                                <span className='flex'>3.5 <span className='text-gray-400'>/5</span></span>
                            </div>

                            <div className='text-2xl font-bold'>$145</div>
                           

                        </div>






                        <div className='lg:hidden'>
                            <img src="/images/detail/3.png" alt="" />
                            <p className='text-xl font-bold'>Polo with Tipping Details</p>
                            <div className=' flex gap-1'>
                                <img src="/images/detail/frame.png" alt="" />
                                <span>4.5 <span className='text-gray-400'>/5</span></span>
                            </div>

                            <div className='text-2xl font-bold'>$180</div>

                        </div>










                        <div className='lg:hidden'>
                            <img src="/images/detail/4.png" alt="" />
                            <p className='text-xl font-bold'>Black Striped T-shirt</p>
                            <div className=' flex gap-1'>
                                <img src="/images/home/5stars.png" alt="" />
                                <span>5.0 <span className='text-gray-400'>/5</span></span>
                            </div>

                            <div className='text-2xl flex font-bold space-x-3'>
                                <span>$120</span>
                                <span className='line-through text-gray-500 '>$150</span>
                                <span className='bg-red-200 text-red-500 text-md rounded-full w-[58px] h-[28px] text-sm flex items-center justify-center '>-30%</span>
                            </div>

                        </div>


                    </div>
                </div>


    </>
  )
}

export default Dthird
