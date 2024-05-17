export const revalidate = 10; // revalidate at most every hour

import ProductCard from "@/components/ProductCard";
import product1 from "../../../../../public/images/products/product1.jpg";
import Image from "next/image";
import { base_url } from "@/utils/const";
import { kuProductList } from "@/utils/url";
import Action from "./components/Action";
import { auth } from "@/auth";

const ProductDetails = async ({ params }) => {
  const product = await fetch(
    base_url + kuProductList + `/${params?.product_id}`
  ).then((res) => res.json());

  const productsDetails = product?.data;

  const session = await auth();

  // console.log("productsDetails", productsDetails);

  return (
    <div>
      <div className="container flex items-center gap-3 py-4">
        <a href="../index.html" className="text-base text-primary">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="font-medium text-gray-600">Product</p>
      </div>

      <div className="container grid grid-cols-2 gap-6">
        <div>
          <Image src={product1} alt="product" className="w-full" />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <Image
              src={product1}
              alt="product2"
              className="w-full border cursor-pointer border-primary"
            />
            <Image
              src={product1}
              alt="product2"
              className="w-full border cursor-pointer"
            />
            <Image
              src={product1}
              alt="product2"
              className="w-full border cursor-pointer"
            />
            <Image
              src={product1}
              alt="product2"
              className="w-full border cursor-pointer"
            />
            <Image
              src={product1}
              alt="product2"
              className="w-full border cursor-pointer"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-3xl font-medium uppercase">
            {productsDetails?.title}
          </h2>
          <div className="flex items-center mb-4">
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
            <div className="ml-3 text-xs text-gray-500">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="space-x-2 font-semibold text-gray-800">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">Brand: </span>
              <span className="text-gray-600"> {productsDetails?.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">Category: </span>
              <span className="text-gray-600">
                {" "}
                {productsDetails?.category}
              </span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">SKU: </span>
              <span className="text-gray-600"> {productsDetails?.sku}</span>
            </p>
          </div>
          <div className="flex items-baseline mt-4 mb-1 space-x-2 font-roboto">
            <p className="text-xl font-semibold text-primary">
              $ {productsDetails?.price}
            </p>
            <p className="text-base text-gray-400 line-through">
              $ {productsDetails?.price}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{productsDetails?.description}</p>

          <Action session={session} product_id={params?.product_id}/>

          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h3 className="pb-3 font-medium text-gray-800 border-b border-gray-200 font-roboto">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            {productsDetails?.long_description}
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
          Related products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {productsDetails?.related_products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
