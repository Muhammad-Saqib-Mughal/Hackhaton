import React from 'react'

function Dsecond() {
    return (
        <>
            <div className='flex justify-around items-end space-y-4'>
                <div className='text-xl'>Product Details</div>
                <div className='flex flex-col items-center'>
                    <span className='font-bold text-xl'>Rating & Reviews</span>
                    <div className='bg-black w-[414px] lg:w-auto h-[3px] rounded-full'></div>
                </div>
                <div className='text-xl' >FAQs</div>
            </div>

            <hr />


            <div className='flex justify-between items-center mt-7'>
                <div><span className='text-2xl font-bold'>All Reviews</span> <span className='text-gray-500'>(451)</span></div>
                <div className='flex gap-5'>
                    <div className='bg-[#F0F0F0] w-9 h-9 flex items-center justify-center rounded-full'><img src="/images/detail/filter.png" alt="" /></div>
                    <div className='bg-[#F0F0F0] p-2 w-40 h-9 flex justify-between items-center rounded-full '>
                        <span>latest</span>
                        <img src="/images/detail/down.png" alt="" />
                    </div>
                    <button className='bg-black text-white h-9 w-44 rounded-full'>Write a Review</button>
                </div>
            </div>




            <div className='space-y-5'>


                <div className='grid grid-cols-2 items-center justify-center p-5 gap-5 lg:grid-cols-1'>



                    <div className='border w-[610px] lg:w-auto p-3 flex flex-col gap-5 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <img src="/images/detail/frame.png" alt="" />
                            <p className='font-bold text-gray-500 text-3xl'>...</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h1 className='font-bold text-xl'>Samantha D.</h1>
                            <img src="/images/detail/verify.png" alt="" />
                        </div>
                        <p className='text-gray-500' >"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>


                        <h1 className='text-gray-500' >Posted on August 14, 2023</h1>
                    </div>





                    <div className='border w-[610px] lg:w-auto p-3 flex flex-col gap-5 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <img src="/images/detail/4stars.png" alt="" />
                            <p className='font-bold text-gray-500 text-3xl'>...</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h1 className='font-bold text-xl'>Alex M. D.</h1>
                            <img src="/images/detail/verify.png" alt="" />
                        </div>
                        <p className='text-gray-500' >"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>


                        <h1 className='text-gray-500' >Posted on August 15, 2023</h1>
                    </div>





                    <div className='border w-[610px] lg:w-auto p-3 flex flex-col gap-5 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <img src="/images/detail/3.5stars.png" alt="" />
                            <p className='font-bold text-gray-500 text-3xl'>...</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h1 className='font-bold text-xl'>Ethan R.</h1>
                            <img src="/images/detail/verify.png" alt="" />
                        </div>
                        <p className='text-gray-500' >"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>


                        <h1 className='text-gray-500' >Posted on August 16, 2023</h1>
                    </div>










                    <div className='border w-[610px] lg:hidden p-3 flex flex-col gap-5 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <img src="/images/detail/4stars.png" alt="" />
                            <p className='font-bold text-gray-500 text-3xl'>...</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h1 className='font-bold text-xl'>Olivia P.</h1>
                            <img src="/images/detail/verify.png" alt="" />
                        </div>
                        <p className='text-gray-500' >"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>


                        <h1 className='text-gray-500' >Posted on August 17, 2023</h1>
                    </div>








                    <div className='border w-[610px] lg:hidden p-3 flex flex-col gap-5 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <img src="/images/detail/4stars.png" alt="" />
                            <p className='font-bold text-gray-500 text-3xl'>...</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h1 className='font-bold text-xl'>Liam K.</h1>
                            <img src="/images/detail/verify.png" alt="" />
                        </div>
                        <p className='text-gray-500' >"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>


                        <h1 className='text-gray-500' >Posted on August 18, 2023</h1>
                    </div>







                    <div className='border w-[610px] lg:hidden p-3 flex flex-col gap-5 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <img src="/images/detail/frame.png" alt="" />
                            <p className='font-bold text-gray-500 text-3xl'>...</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <h1 className='font-bold text-xl'>Ava H.</h1>
                            <img src="/images/detail/verify.png" alt="" />
                        </div>
                        <p className='text-gray-500' >"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>


                        <h1 className='text-gray-500' >Posted on August 19, 2023</h1>
                    </div>

                </div>

            </div>

            <div className='w-full flex items-center justify-center space-y-7'>
                <button className=' w-56 h-12 border rounded-full '>Load More Reviews</button>

            </div>



        </>
    )
}

export default Dsecond
