"use client";
import AddressCard from "@/components/AddressCard";
import CommonButton from "@/components/CommonButton";
import React, { useState } from "react";
import AddAddressModal from "./AddAddressModal";

const Address = ({ address }) => {
  const [showAddAddressModal, setAddressModal] = useState(false);

  const shipping_address = address?.find((a) => a?.address_type === "shipping_address");



  return (
    <>
      <div className="grid max-w-5xl grid-cols-2 gap-4 mx-auto">
        <div className="flex items-center justify-center">
          <CommonButton
            onClick={() => {
              setAddressModal(true);
            }}
            width="w-[210px]"
            btnLevel="Shipping address"
            label=""
          />
        </div>

        <AddressCard address={shipping_address} />
      </div>
      <AddAddressModal
        open={showAddAddressModal}
        setOpen={setAddressModal}
        onClose={() => setAddressModal(false)}
      />
    </>
  );
};

export default Address;
