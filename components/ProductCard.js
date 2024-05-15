import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({product}) => {
  
  return (
    <Link href={`/en/product/${product?.id}`} className="overflow-hidden bg-white rounded shadow group">
      <div className="relative">
        <Image
          width={200}
          height={200}
          src="/images/products/product1.jpg"
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100"
        >
          <a
            href="#"
            className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href="#"
            className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
      <div className="px-4 pt-4 pb-3">
        <a href="#">
          <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
            {product?.title}
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl font-semibold text-primary">${product?.price}</p>
          <p className="text-sm text-gray-400 line-through">${product?.price}</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="ml-3 text-xs text-gray-500">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary"
      >
        Add to cart
      </a>
    </Link>
  );
};

export default ProductCard;
