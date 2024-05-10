import Category from "@/components/home/Category";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <body>
        {/* <!-- header --> */}
        <header className="py-4 shadow-sm bg-white">
          <div className="container flex items-center justify-between">
            <a href="index.html">
              <img src="assets/images/logo.svg" alt="Logo" className="w-32" />
            </a>

            <div className="w-full max-w-xl relative flex">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                placeholder="search"
              />
              <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
                Search
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-2xl">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="text-xs leading-3">Wishlist</div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  8
                </div>
              </a>
              <a
                href="#"
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-2xl">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="text-xs leading-3">Cart</div>
                <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  2
                </div>
              </a>
              <a
                href="#"
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-2xl">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div className="text-xs leading-3">Account</div>
              </a>
            </div>
          </div>
        </header>
        {/* <!-- ./header -->

    <!-- navbar --> */}
        <nav className="bg-gray-800">
          <div className="container flex">
            <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
              <span className="text-white">
                <i className="fa-solid fa-bars"></i>
              </span>
              <span className="capitalize ml-2 text-white hidden">
                All Categories
              </span>

              {/* <!-- dropdown --> */}
              <div
                className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
                // style="width: 300px;"
              >
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src="assets/images/icons/sofa.svg"
                    alt="sofa"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src="assets/images/icons/terrace.svg"
                    alt="terrace"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">
                    Living Room
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src="assets/images/icons/bed.svg"
                    alt="bed"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src="assets/images/icons/office.svg"
                    alt="Outdoor"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src="assets/images/icons/outdoor-cafe.svg"
                    alt="outdoor"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src="assets/images/icons/bed-2.svg"
                    alt="Mattress"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
              <div className="flex items-center space-x-6 capitalize">
                <a
                  href="index.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Home
                </a>
                <a
                  href="pages/shop.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Contact us
                </a>
              </div>
              <a
                href="pages/login.html"
                className="text-gray-200 hover:text-white transition"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- ./navbar -->

    <!-- banner --> */}
        <div
          className="bg-cover bg-no-repeat bg-center py-36"

          // style="background-image: url('assets/images/banner-bg.jpg');"
        >
          <div className="container">
            <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
              best collection for home decoration
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              accusantium perspiciatis, sapiente magni eos dolorum ex quos
              dolores odio
            </p>
            <div className="mt-12">
              <a
                href="#"
                className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        {/* <!-- ./banner -->

    <!-- features --> */}
        <div className="container py-16">
          <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <img
                src="assets/images/icons/delivery-van.svg"
                alt="Delivery"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg">
                  Free Shipping
                </h4>
                <p className="text-gray-500 text-sm">Order over $200</p>
              </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <img
                src="assets/images/icons/money-back.svg"
                alt="Delivery"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
                <p className="text-gray-500 text-sm">30 days money returs</p>
              </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <img
                src="assets/images/icons/service-hours.svg"
                alt="Delivery"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                <p className="text-gray-500 text-sm">Customer support</p>
              </div>
            </div>
          </div>
        </div>


<Category/>

        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            top new arrival
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        {/* <!-- ./new arrival -->

    <!-- ads --> */}
        <div className="container pb-16">
          <a href="#">
            <img src="assets/images/offer.jpg" alt="ads" className="w-full" />
          </a>
        </div>

        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            TRENDING PRODUCTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </body>
    </main>
  );
}
