import React from 'react'

function Hsecond() {
  return (
    <>
    <div className='h-[122px]  bg-black grid grid-cols-5 items-center justify-center px-6 lg:hidden'>
        <img src="/images/home/vs.png" alt="" />
        <img src="/images/home/zara.png" alt="" />
        <img src="/images/home/gucci.png" alt="" />
        <img  src="/images/home/prada.png" alt="" />
    </div>

    <div className='h-auto  bg-black  px-6 space-y-3 hidden lg:block '>
      <div className='flex w-27 gap-2'>

        <img src="/images/home/vs2.png" alt="" />
        <img src="/images/home/zara2.png" alt="" />
        <img src="/images/home/gucci2.png" alt="" />

      </div> 
      <div className='flex justify-center items-center gap-2'>
        <img  src="/images/home/prada2.png" alt="" />
        <img  src="/images/home/ck2.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default Hsecond
