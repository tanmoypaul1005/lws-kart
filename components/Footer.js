import { iLogo, iMethods } from "@/utils/imageImports";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="pt-16 pb-12 bg-white border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
          <div className="col-span-1 space-y-4">
            <Image src={iLogo} alt="logo" className="w-[150px]" />
            <div className="mr-2">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                hic?
              </p>
            </div>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 col-span-2 gap-4">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="block text-base text-gray-500 hover:text-gray-900"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="py-4 bg-gray-800">
        <div className="container flex items-center justify-between">
          <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
          <div>
            <Image
              src={iMethods}
              alt="methods"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
