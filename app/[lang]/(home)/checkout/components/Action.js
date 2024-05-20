import React from "react";

const Action = ({session,subTotal}) => {
  return (
    <div>
      <button 
      onClick={() => {
        addOrder(
        {
          email: session?.user?.email,
        //   cart: cart?.data,
          total: subTotal,
        //   address: address?.data?.filter((item) => item?.selected)[0],
        }
      )}}
      className="block w-full px-4 py-3 font-medium text-center text-white transition border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary">
        Place order
      </button>
    </div>
  );
};

export default Action;
