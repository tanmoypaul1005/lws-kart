export const revalidate = 10 // revalidate at most every hour

import React from 'react'
import ProductCard from '../ProductCard'
import { base_url } from '@/utils/const';
import { kuProductList } from '@/utils/url';

const NewArrival = async() => {

    const products = await fetch(base_url + kuProductList).then((res) => res.json());

    //   console.log("products",products)
    
    return (
        <div className="container pb-16">
        <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
          top new arrival
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {
                products?.data?.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }

        </div>
      </div>
    )
}

export default NewArrival