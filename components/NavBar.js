import Image from "next/image";
import sofa from "../public/images/icons/sofa.svg";
import terrace from "../public/images/icons/terrace.svg";
import bed from "../public/images/icons/bed.svg";
import office from "../public/images/icons/office.svg";
import outdoorCafe from "../public/images/icons/outdoor-cafe.svg";
import bed2 from "../public/images/icons/bed-2.svg";
import Link from "next/link";
import { auth } from "@/auth";
import Logout from "./Logout";

const NavBar = async () => {
  
  const session = await auth();

  // console.log("session", session);

  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white hidden">
            All Categories
          </span>

          <div
            className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
            // style="width: 300px;"
          >
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image src={sofa} alt="sofa" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={terrace}
                alt="terrace"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Living Room</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image src={bed} alt="bed" className="w-5 h-5 object-contain" />
              <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={office}
                alt="Outdoor"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={outdoorCafe}
                alt="outdoor"
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={bed2}
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
            <a href="#" className="text-gray-200 hover:text-white transition">
              About us
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              Contact us
            </a>
          </div>
          {session ? (
            <div className="flex space-x-3">
              <div className="text-gray-200">{session?.user?.name}</div>
              <Logout />
            </div>
          ) : (
            <Link
              href="/en/login"
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
