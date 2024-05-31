"use client"
import React from "react";
import { redirect } from "next/navigation";
import { sendEmail } from "@/app/actions";

const Action = ({session,subTotal}) => {
  return (
    <div>
      <button 
      onClick={async() => {
      //   addOrder(
      //   {
      //     email: session?.user?.email,
      //   //   cart: cart?.data,
      //     total: subTotal,
      //   //   address: address?.data?.filter((item) => item?.selected)[0],
      //   }
      // )
      await sendEmail(session?.user?.email)
    }
    }
      className="block w-full px-4 py-3 font-medium text-center text-white transition border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary">
        Place order
      </button>
    </div>
  );
};

export default Action;
