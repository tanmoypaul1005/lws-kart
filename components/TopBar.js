"use client";
// export const revalidate = 10; // revalidate at most every hour
import { getCart } from "@/app/actions";
import { CartContext } from "@/app/contexts";
import { iLogo } from "@/utils/imageImports";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";

const TopBar = ({ session }) => {

  const { totalCart, setTotalCart } = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, [totalCart]);

  console.log("totalCart", totalCart);

  const fetchData = async () => {
    if (session?.user?.email) {
      const cart = await getCart(session?.user?.email);
      // console.log("cart", cart);
      setTotalCart(cart?.data?.length);
    }
  };

  return (
    <div className="py-4 bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={iLogo} alt="Logo" className="w-32" />
        </Link>

        <div className="relative flex w-full max-w-xl">
          <span className="absolute text-lg text-gray-400 left-4 top-3">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="hidden w-full py-3 pl-3 pr-3 border rounded border-primary focus:outline-none md:flex"
            placeholder="search"
          />
          {/* <button className="hidden px-8 text-white transition border bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary md:flex">
              Search
            </button> */}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 bg-primary">
              8
            </div>
          </a>
          <Link
            href="/en/checkout"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 -top-1 bg-primary">
              {totalCart}
            </div>
          </Link>

          <Link
            href="/en/account"
            className="relative text-center text-gray-700 transition hover:text-primary"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
