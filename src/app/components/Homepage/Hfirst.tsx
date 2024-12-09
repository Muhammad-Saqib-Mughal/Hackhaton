import React from 'react'

function Hfirst() {
  return (
    <>
      <div className='flex hfirst '>
        <div className='w-1/2 lg:w-[100vh] lg:space-y-3 h-screen flex flex-col justify-center items-center lg:p-3'>

          <h1 className='text-6xl font-bold w-[83%] lg:w-[100%] lg:text-3xl'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className='w-[83%] lg:w-[90%] text-base text-gray-500'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <span className='w-[83%] lg:w-[100vw] lg:flex lg:justify-center '>
            <button className='h-[52px] w-[210px] bg-black text-white rounded-full self-start'>Shop now</button>
          </span>
          <div>
            
          </div>
          <div className='hidden lg:block'>

          <div className='flex gap-3 '>
            <span className='flex flex-col'>
              <span className='font-bold'>200+</span>
              <span className='text-xs text-gray-500'>International Brands</span>
            </span>
              <hr />
            <span className='flex flex-col'>
              <span className='font-bold'>2000+</span>
              <span className='text-xs text-gray-500'>High-Quality Products</span>
            </span>
          </div>
          </div>

          <div className='hidden lg:block'>
          <span className='flex flex-col'>
              <span className='font-bold'>30,000+</span>
              <span className='text-xs text-gray-500'>Happy Customers</span>
            </span>
          </div>
          <div className='hidden lg:block'><img src="/images/home/main2.png" alt="" /></div>


        </div>
        <div className='w-1/2 relative lg:hidden'>
          <img className='absolute right-4 top-11' src="/images/home/star.png" alt="" />
          <img className='absolute top-60 left-10' width={50} src="/images/home/star.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hfirst
