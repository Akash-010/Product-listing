import React from 'react';
import ProductList from '../../components/ProductList';
import api from '@/util/axios';
import Link from 'next/link';

export default async function ProductsPage() {
  const res = await api.get('/products');
  const products = res.data;

  return (
    <div className="w-full">
      <h1 className="text-center bg-orange-300 text-4xl uppercase font-bold p-2">
        All Products
        
      </h1>
      <button className='text-2xl float-end m-2 bg-blue-700 px-6 py-1 text-white font-bold rounded-[8px] shadow-xl '>
        <Link href={'/'}>Home</Link></button>

      <ProductList products={products}/>
    </div>
  );
}
