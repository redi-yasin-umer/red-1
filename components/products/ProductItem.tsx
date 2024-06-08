import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Product {
  slug: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  // Other properties...
}

export default function ProductItem({ product }: { product?: Product }) {
  // Check if product is undefined
  if (!product) {
    return <div>No product data available</div>;
  }

  // Check if product.slug is defined before accessing it
  const slug = product.slug || '';

  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        {/* Check if slug is defined before creating the link */}
        {slug && (
          <Link href={`/product/${slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover h-64 w-full"
            />
          </Link>
        )}
      </figure>
      <div className="card-body">
        {/* Check if slug is defined before creating the link */}
        {slug && (
          <Link href={`/product/${slug}`}>
            <h2 className="card-title font-normal">{product.name}</h2>
          </Link>
        )}
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>
        </div>
      </div>
    </div>
  );
}
