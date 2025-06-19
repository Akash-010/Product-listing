import api from '@/util/axios';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`,
  };
}

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  try {
    const res = await api.get(`/products/${id}`);
    const product = res.data;

    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2  rounded-lg shadow-2xl"
          />

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-orange-600 mb-4">{product.title}</h1>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="text-xl text-green-600 font-semibold mb-4">Rs. {product.price}</p>
            <p className="text-gray-800 mb-6">{product.description}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
              Buy Now
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow mx-5">
              <Link href={'/products'}>Back</Link>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold text-xl">
        Product not found
      </div>
    );
  };
};
