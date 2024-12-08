import React from 'react'

function Hfifth() {
    return (
        <>

            <div className=''>
                <div className='flex items-center justify-between p-7'>
                    <h1 className='text-5xl lg:text-2xl font-bold'>OUR HAPPY CUSTOMERS</h1>
                    <div className='flex gap-3'>
                        <img className='h-7' src="/images/home/arrow-left.png" alt="" />
                        <img className='h-7' src="/images/home/arrow-right.png" alt="" />
                    </div>
                </div>



                <div className='grid grid-cols-3 lg:grid-cols-1 px-5'>

                    <div className='w-[400px] h-[250px] border space-y-4 p-5 rounded-3xl'>
                        <img src="/images/home/5stars.png" alt="" />
                        <span className='flex gap-2 items-center'>
                        <h1>Sarah M.</h1>
                        <img src="/images/home/verify.png" alt="" />
                        </span>
                        <p className='text-gray-500'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>


                    <div className='w-[400px] h-[250px] border space-y-4 p-5 rounded-3xl lg:hidden'>
                        <img src="/images/home/5stars.png" alt="" />
                        <span className='flex gap-2 items-center'>
                        <h1>Alex K.</h1>
                        <img src="/images/home/verify.png" alt="" />
                        </span>
                        <p className='text-gray-500'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>



                    <div className='w-[400px] h-[250px] border space-y-4 p-5 rounded-3xl lg:hidden'>
                        <img src="/images/home/5stars.png" alt="" />
                        <span className='flex gap-2 items-center'>
                        <h1>James L.</h1>
                        <img src="/images/home/verify.png" alt="" />
                        </span>
                        <p className='text-gray-500'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    </div>

                </div>



            </div>

        </>
    )
}

export default Hfifth
