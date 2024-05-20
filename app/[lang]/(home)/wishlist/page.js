import { iProduct1 } from "@/utils/imageImports";
import Image from "next/image";

const WishList = () => {
  return (
    <div>
      <div className="container flex items-center gap-3 py-4">
        <a href="../index.html" className="text-base text-primary">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="font-medium text-gray-600">Profile</p>
      </div>

      <div className="container gap-6 pt-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-4">
        <Wish/>
        <Wish/>
        <Wish/>
        </div>
      </div>
    </div>
  );
};

export default WishList;

const Wish = () => {
  return (
    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28">
        <Image
          src={iProduct1}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-medium text-gray-800 uppercase">Sofa</h2>
        <p className="text-sm text-gray-500">
          Availability: <span className="text-red-600">Out of Stock</span>
        </p>
      </div>
      <div className="text-lg font-semibold text-primary">$320.00</div>
      <a
        href="#"
        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition bg-red-400 border border-red-400 rounded cursor-not-allowed font-roboto"
      >
        add to cart
      </a>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};
