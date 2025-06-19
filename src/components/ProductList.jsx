'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { FaSearch } from 'react-icons/fa';
import { ImSpinner9 } from "react-icons/im";

const ProductList = ({ products }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [products]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); 
  }, [searchText, products]);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-6 px-4">
        <div className="flex items-center rounded-md px-3 py-2 w-full max-w-xl bg-slate-100">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <ImSpinner9 size={40} className="animate-spin text-4xl text-green-500" />
        </div>
      ) : (
        <>
          <div className="flex flex-col md:grid grid-cols-2 lg:grid xl:grid-cols-3 gap-10 lg:pl-20 py-10">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center col-span-full text-red-500 text-xl">
                No products found.
              </p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center my-6 gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={`px-4 py-2 rounded ${
                    currentPage === num
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductList;
