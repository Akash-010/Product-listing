import React from 'react'
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar/>
    
     <div className='flex flex-col items-center'>
      <p className='text-7xl text-center py-20 text-pink-400'>We got you all covered </p>
      <Link href={'/products'}> <button className='font-bold text-yellow-200 bg-black text-5xl rounded-2xl px-20 py-5 hover:text-black hover:bg-yellow-200'>All Products</button></Link>
     </div>
    </>
  )
};

export default Page;
