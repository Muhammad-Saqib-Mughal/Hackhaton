import React from 'react'

function Hforth() {
    return (
        <>
            <div className='mt-16 flex p-4 items-center justify-center'>
                <div className='p-10 bg-[#F0F0F0] h-[866px] lg:h-auto lg:w-auto w-[1239px]  space-y-24 flex items-center flex-col'>
                    <div>
                        <h1 className='text-5xl lg:text-3xl font-bold'>BROWSE BY Dress STYLE</h1>
                    </div>



                    <div className='grid grid-cols-3 grid-rows-2 gap-5 items-center lg:grid-cols-1'>
                    <span className='casual'><img src="/images/home/casual.png" alt="" /></span>
                    <span className='formal'><img src="/images/home/formal.png" alt="" /></span>
                    <span className='party'><img src="/images/home/party.png" alt="" /></span>
                    <span className='gym justify-items-start'><img src="/images/home/gym.png" alt="" /></span>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Hforth
