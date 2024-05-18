import { getCart } from "@/app/actions";
import { auth } from "@/auth";

const Checkout = async () => {
  const session = await auth();

  // console.log("session", session);

  const cart = await getCart(session?.user?.email);

  console.log("cart", cart);

  const subTotal=cart?.data?.reduce((total, item) => total + item?.price * item?.quantity, 0)

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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label for="first-name" className="text-gray-600">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input-box"
                />
              </div>
              <div>
                <label for="last-name" className="text-gray-600">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="input-box"
                />
              </div>
            </div>
            <div>
              <label for="company" className="text-gray-600">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="input-box"
              />
            </div>
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
            <div>
              <label for="city" className="text-gray-600">
                City
              </label>
              <input type="text" name="city" id="city" className="input-box" />
            </div>
            <div>
              <label for="phone" className="text-gray-600">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="input-box"
              />
            </div>
            <div>
              <label for="email" className="text-gray-600">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-box"
              />
            </div>
            <div>
              <label for="company" className="text-gray-600">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="input-box"
              />
            </div>
          </div>
        </div>

        <div className="col-span-4 border border-gray-200 p-4 rounded">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            order summary
          </h4>
          <div className="space-y-2">
            {
              cart?.data?.map((item,index)=>(
                <div key={index}  className="flex justify-between">
                  <div className="max-w-[170px] min-w-[170px]">
                    <h5 className="text-gray-800 font-medium">
                      {item?.title ?? "NA"}
                    </h5>
                    <p className="text-sm text-gray-600 ">Size: {item?.size ?? "NA"}</p>
                  </div>
                  <p className="text-gray-600 max-w-[20px] min-w-[20px]">x{item.quantity ?? 0}</p>
                  <p className="text-gray-800 font-medium max-w-[70px] min-w-[70px] flex justify-end items-center">${item?.price ?? "NA"}</p>
                </div>
              ))
            }
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
