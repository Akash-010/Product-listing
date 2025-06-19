import React from 'react'
import Link from 'next/link';


const Navbar = () => {

  
  return (
    <>
     <nav className='md:flex items-center justify-around bg-blue-500 p-4 cursor-pointer w-full'>
      <div className='text-3xl font-extrabold text-orange-300 text-center my-2'>ShopNoow.</div>

        <div className=' flex items-center justify-evenly text-2xl font-bold text-yellow-300 my-2 md:flex md:gap-2 lg:gap-16'>
        <Link href={'/'}><div className=' hover:text-orange-600'>Home</div></Link>  
        <Link href={'/products'}><div className=' hover:text-orange-600'>Products</div></Link>
        </div>  
    </nav> 
    </>
  )
}

export default Navbar;
