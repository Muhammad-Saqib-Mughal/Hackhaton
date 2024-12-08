import React from 'react'

function Dfirst() {
    return (
        <>
            <div className='px-16 py-4'>
                <div className='w-auto '>Home &gt; Shop &gt; Men &gt; T-shirts </div>
                <div className='flex space-x-3 lg:flex-col'>
                    <div className='w-1/2 lg:w-11/12 flex space-x-3 gap-3 lg:gap-0 lg:flex-col'>
                        <div className='grid grid-rows-3 gap-3 lg:grid-cols-3'>
                            <img src="/images/detail/s1.png" alt="" />
                            <img src="/images/detail/s2.png" alt="" />
                            <img src="/images/detail/s3.png" alt="" />
                        </div>

                        <div>
                            <img src="/images/detail/sL.png" alt="" />
                        </div>
                    </div>

                    <div className='w-1/2 lg:w-11/12 p-3 space-y-4'>
                        <div className='flex flex-col space-y-2 '>
                            <h1 className='text-[40px] font-bold'>One Life Graphic T-shirt</h1>
                            <div className='flex gap-5'><img src="/images/detail/frame.png" alt="" />
                                <span>4.5 <span className='text-gray-500'>/5</span></span>
                            </div>

                            <div className='text-2xl flex font-bold space-x-3'>
                                <span>$260</span>
                                <span className='line-through text-gray-500 '>$300</span>
                                <span className='bg-red-200 text-red-500 text-md rounded-full w-[58px] h-[28px] text-sm flex items-center justify-center '>-40%</span>
                            </div>

                            <p className='text-gray-500'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                        </div>


                        <hr />


                        <div>
                            <h1 className='text-gray-500'>Select Colors</h1>

                            <div className='flex gap-5'>
                                <span className='w-[37px] h-[37px] rounded-full bg-[#4F4631] flex items-center justify-center' ><img src="/images/detail/vector.png" alt="" /></span>
                                <span className='w-[37px] h-[37px] rounded-full bg-[#314F4A]' ></span>
                                <span className='w-[37px] h-[37px] rounded-full bg-[#31344F]' ></span>
                            </div>
                        </div>

                        <hr />

                        <div className='space-y-2'>
                            <h1 className='text-gray-500' >Choose Size</h1>
                            <div className='flex gap-5'>
                                <button className='bg-[#F0F0F0] w-20 h-10 rounded-full' >Small</button>
                                <button className='bg-[#F0F0F0] w-20 h-10 rounded-full' >Medium</button>
                                <button className='bg-black text-white w-20 h-10 rounded-full' >large</button>
                                <button className='bg-[#F0F0F0] w-20 h-10 rounded-full' >X-Large</button>
                            </div>
                        </div>


                        <hr />

                        <div className='flex space-x-3 gap-3'>
                            <div className='bg-[#F0F0F0] flex w-40 h-12 justify-around items-center rounded-full'>
                                <img src="/images/detail/minus.png" alt="" />
                                <span>1</span>
                                <img src="/images/detail/plus.png" alt="" />
                            </div>
                            <button className='bg-black text-white w-96 h-12 rounded-full'>Add to Cart</button>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}

export default Dfirst
