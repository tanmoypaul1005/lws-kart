import { getAddress, getCart } from "@/app/actions";
import { auth } from "@/auth";
import CommonInput from "@/components/input/CommonInput";
import Address from "./components/Address";

const Checkout = async () => {
  const session = await auth();

  // console.log("session", session);

  const cart = await getCart(session?.user?.email);
  const address = await getAddress(session?.user?.email);

  const subTotal = cart?.data?.reduce(
    (total, item) => total + item?.price * item?.quantity,
    0
  );

  // console.log("address",address)

  return (
    <div>
      <div className="container flex items-center gap-3 py-4">
        <a href="../index.html" className="text-base text-primary">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="font-medium text-gray-600">Checkout</p>
      </div>

      <div className="container grid items-start grid-cols-12 gap-6 pt-4 pb-16">
        <div className="col-span-8 p-4 border border-gray-200 rounded">
          <h3 className="mb-4 text-lg font-medium capitalize">Checkout</h3>
          <div className="space-y-4">
            <CommonInput value={session?.user?.name} label="Name" />
            <CommonInput
              disabled={true}
              value={session?.user?.email}
              label="Email address"
            />
            <CommonInput label="Phone number" />

            <Address email={session?.email} address={address?.data} />
          </div>
        </div>

        <div className="col-span-4 p-4 border border-gray-200 rounded">
          <h4 className="mb-4 text-lg font-medium text-gray-800 uppercase">
            order summary
          </h4>
          <div className="space-y-2">
            {cart?.data?.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div className="max-w-[170px] min-w-[170px]">
                  <h5 className="font-medium text-gray-800">
                    {item?.title ?? "NA"}
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Size: {item?.size ?? "NA"}
                  </p>
                </div>
                <p className="text-gray-600 max-w-[20px] min-w-[20px] flex justify-center text-center  items-center">
                  x{item.quantity ?? 0}
                </p>
                <p className="text-gray-800 font-medium max-w-[70px] min-w-[70px] flex justify-end items-center">
                  ${item?.price ?? "NA"}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between py-3 mt-1 font-medium text-gray-800 border-b border-gray-200 uppercas">
            <p>subtotal</p>
            <p>$ {subTotal}</p>
          </div>

          <div className="flex justify-between py-3 mt-1 font-medium text-gray-800 border-b border-gray-200 uppercas">
            <p>shipping</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between py-3 font-medium text-gray-800 uppercas">
            <p className="font-semibold">Total</p>
            <p>$ {subTotal}</p>
          </div>

          <div className="flex items-center mt-2 mb-4">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="w-3 h-3 rounded-sm cursor-pointer text-primary focus:ring-0"
            />
            <label
              for="aggrement"
              className="ml-3 text-sm text-gray-600 cursor-pointer"
            >
              I agree to the{" "}
              <a href="#" className="text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          <a
            href="#"
            className="block w-full px-4 py-3 font-medium text-center text-white transition border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary"
          >
            Place order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
