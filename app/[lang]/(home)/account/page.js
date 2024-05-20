import { getAddress } from "@/app/actions";
import Address from "../checkout/components/Address";
import { auth } from "@/auth";

const Account = async() => {

  const session = await auth();
  const address = await getAddress(session?.user?.email);

  return (
    <div>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Account</p>
      </div>

      <div className="container  items-start  pt-4 pb-16">
        <div className="flex">
          <div className="px-4 pt-6 pb-8 grid max-w-5xl bg-white border border-gray-200 rounded shadow">
            <div className="flex space-x-[120px] items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Personal Profile
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">John Doe</h4>
              <p className="text-gray-800">example@mail.com</p>
              <p className="text-gray-800">0811 8877 988</p>
            </div>
          </div>

          <Address email={session?.user?.email} address={address?.data} />
        </div>
      </div>
    </div>
  );
};

export default Account;
