"use client"
import AddressCard from "@/components/AddressCard";
import CommonButton from "@/components/CommonButton";
import React, { useState } from "react";
import AddAddressModal from "./AddAddressModal";

const Address = () => {
    const [showAddAddressModal, setAddressModal] = useState(false)
  return (
    <>
    <div className="grid grid-cols-2 gap-4 mx-auto max-w-5xl">
      <div className="flex justify-center items-center">
        <CommonButton onClick={()=>{console.log("ddd"); setAddressModal(true)}} width="w-[210px]" btnLevel="Shipping address" label="" />
      </div>
      <AddressCard />


    </div>
    <AddAddressModal open={showAddAddressModal} setOpen={setAddressModal} onClose={() => setAddressModal(false)} />
    </>
  );
};

export default Address;
