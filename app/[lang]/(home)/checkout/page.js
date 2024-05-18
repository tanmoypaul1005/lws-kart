import { getCart } from "@/app/actions";
import { auth } from "@/auth";
import CommonInput from "@/components/input/CommonInput";

const Checkout = async () => {
  const session = await auth();

  // console.log("session", session);

  const cart = await getCart(session?.user?.email);

  console.log("cart", cart);

  const subTotal = cart?.data?.reduce(
    (total, item) => total + item?.price * item?.quantity,
    0
  );

  return (
    <div>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>

      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <div className="space-y-4">
            <CommonInput label="Name" />
       
            <div>
              <label for="region" className="text-gray-600">
                Country/Region
              </label>
              <input
                type="text"
                name="region"
                id="region"
                className="input-box"
              />
            </div>
            <div>
              <label for="address" className="text-gray-600">
                Street address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="input-box"
              />
            </div>

            <CommonInput label="City" />
            <CommonInput label="Phone number" />
            <CommonInput label="Email address" />

            <CommonInput label="Company" />
          </div>
        </div>

        <div className="col-span-4 border border-gray-200 p-4 rounded">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            order summary
          </h4>
          <div className="space-y-2">
            {cart?.data?.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div className="max-w-[170px] min-w-[170px]">
                  <h5 className="text-gray-800 font-medium">
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

          <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>subtotal</p>
            <p>$ {subTotal}</p>
          </div>

          <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>shipping</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
            <p className="font-semibold">Total</p>
            <p>$ {subTotal}</p>
          </div>

          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label
              for="aggrement"
              className="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <a href="#" className="text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          <a
            href="#"
            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
          >
            Place order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
