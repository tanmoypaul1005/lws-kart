// export const revalidate = 10; // revalidate at most every hour
import { getCart } from '@/app/actions';
import { auth } from '@/auth';
import { iLogo } from '@/utils/imageImports';
import Image from 'next/image';
import Link from 'next/link';

const TopBar = async() => {

  const session = await auth();
   const  cart = await getCart(session?.user?.email);


    return (
        <div className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image src={iLogo} alt="Logo" className="w-32" />
          </Link>

          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border border-primary  pl-3 py-3 pr-3 rounded focus:outline-none hidden md:flex"
              placeholder="search"
            />
            {/* <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
              Search
            </button> */}
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
            <Link
              href="/en/cart"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                {cart?.data?.length}
              </div>
            </Link>


            <Link 
            href="/en/account"
          
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default TopBar