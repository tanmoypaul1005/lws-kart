import React from 'react'
import ProductCard from '../ProductCard'
import { base_url, products_type_value } from '@/utils/const';
import { kuProductList } from '@/utils/url';

const Trending = async() => {

    const category = products_type_value.trending;
    const products = await fetch(`${base_url}${kuProductList}?category=${category}`).then((res) => res.json());

    return (
        <div className="container pb-16">
        <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
          TRENDING PRODUCTS
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {
                products?.data?.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }
        </div>
      </div>
    )
}

export default Trending