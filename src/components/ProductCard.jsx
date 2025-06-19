import Link from 'next/link'

const ProductCard = ({ product }) => {

  return (
    <Link href={`/products/${product.id}`}>
    <div className='bg-slate-100 text-center flex flex-col items-center p-5 rounded-[20px] md:h-[400px] md:w-[350px] shadow-xl'>
      <p className='uppercase font-bold py-2 text-blue-500'>{product.category}</p>
      <img className='h-[200px] w-[200px]' src={product.image} alt="" />
      <h1 className='py-2'>{product.title.slice(0,50)}</h1>
      <p>Rs. {product.price}</p>
      <p>Rating: {product.rating.rate}⭐</p>
    </div>
    </Link>
  )
}

export default ProductCard;
