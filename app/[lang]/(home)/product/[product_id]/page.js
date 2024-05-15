import ProductCard from "@/components/ProductCard";
import product1 from "../../../../../public/images/products/product1.jpg";
import Image from "next/image";
import { base_url } from "@/utils/const";
import { kuProductList } from "@/utils/url";

const ProductDetails = async ({ params }) => {
  const product = await fetch(
    base_url + kuProductList + `/${params?.product_id}`
  ).then((res) => res.json());

  const productsDetails = product?.data;

  console.log("productsDetails", productsDetails);

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
              <span className="text-gray-600"> {productsDetails?.category}</span>
            </p>
            <p className="space-x-2">
              <span className="font-semibold text-gray-800">SKU: </span>
              <span className="text-gray-600"> {productsDetails?.sku}</span>
            </p>
          </div>
          <div className="flex items-baseline mt-4 mb-1 space-x-2 font-roboto">
            <p className="text-xl font-semibold text-primary">$ {productsDetails?.price}</p>
            <p className="text-base text-gray-400 line-through">$ {productsDetails?.price}</p>
          </div>

          <p className="mt-4 text-gray-600">
          {productsDetails?.description}
          </p>

          <div className="mt-4">
            <h3 className="mb-1 text-sm text-gray-800 uppercase">Quantity</h3>
            <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max">
              <div className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none">
                -
              </div>
              <div className="flex items-center justify-center w-8 h-8 text-base">
                4
              </div>
              <div className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-5 pb-5 mt-6 border-b border-gray-200">
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-2 font-medium text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-2 font-medium text-gray-600 uppercase transition border border-gray-300 rounded hover:text-primary"
            >
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>

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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              necessitatibus deleniti natus dolore cum maiores suscipit optio
              itaque voluptatibus veritatis tempora iste facilis non aut
              sapiente dolor quisquam, ex ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              quae accusantium voluptatem blanditiis sapiente voluptatum. Autem
              ab, dolorum assumenda earum veniam eius illo fugiat possimus illum
              dolor totam, ducimus excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quia modi ut expedita! Iure molestiae labore cumque nobis quasi
              fuga, quibusdam rem? Temporibus consectetur corrupti rerum
              veritatis numquam labore amet.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">
          Related products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
