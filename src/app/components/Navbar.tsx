import React from 'react'


function Navbar() {
    return (
        <>
<div className='flex flex-col'>


            <div className='bg-black text-white flex items-center justify-center w-full'>
                <span className=''>Sign up and get 20% off to your first order.</span>
                <span className='underline cursor-pointer'>Sign Up Now</span>
            </div>

            <div className='flex items-center w-[90%] h-[70px] gap-6 self-center'>
                <img className='hidden lg:block' src="/images/nav/ham.png" alt="" />
                <div className="logo font-bold text-[32px]">SHOP.CO</div>
                <div className='flex items-center gap-6 lg:justify-end'>
                    <span className='lg:hidden block'>Shop</span>
                    <span className='lg:hidden block'>On Sale</span>
                    <span className='lg:hidden block'>New Arrivals</span>
                    <span className='lg:hidden block'>Brands</span>
                    <span className='lg:hidden block'>

                    <div className='flex items-center  bg-[#F0F0F0] rounded-full w-[557px] h-[38px] '>
                        <img src="/images/nav/search.png" alt="" />
                        <input className='bg-[#F0F0F0] outline-none' type="text" placeholder='Search for products...' />
                    </div>

                    </span>

                    <span className='flex items-center gap-4'>
                        <span><img src="images/nav/cart.png" alt="cart" /></span>
                        <span><img src="images/nav/profile.png" alt="profile" /></span>
                    </span>
                </div>

            </div>
</div>
<hr />
     
        </>
    )
}

export default Navbar
