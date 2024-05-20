"use client";
import AddressCard from "@/components/AddressCard";
import CommonButton from "@/components/CommonButton";
import React, { useState } from "react";
import AddAddressModal from "./AddAddressModal";
import { address_type } from "@/utils/const";

const Address = ({ address,email }) => {
  
  const [showAddAddressModal, setAddressModal] = useState(false);

  const [selectType, setSelectType] = useState(false);

  const shipping_address = address?.find(
    (a) => a?.address_type === address_type.shipping_address
  );
  const billing_address = address?.find(
    (a) => a?.address_type === address_type.billing_address
  );

  return (
    <>
      <div className="grid max-w-5xl grid-cols-2 gap-4 mx-auto">
        <div className="flex items-center justify-center">
          {billing_address?.title ? (
            <AddressCard 
            title="Billing address"
            address={billing_address} />
          ) : (
            <CommonButton
              onClick={() => {
                setSelectType(address_type.billing_address);
                setAddressModal(true);
              }}
              width="w-[210px]"
              btnLevel="Billing address"
              label=""
            />
          )}
        </div>

        {shipping_address?.title ? (
          <AddressCard 
          title="Shipping address"
          address={shipping_address} />
        ) : (
          <CommonButton
          
            onClick={() => {
              setAddressModal(true);
              setSelectType(address_type.shipping_address);
            }}
            width="w-[210px]"
            btnLevel="Shipping address"
            label=""
          />
        )}
      </div>
      <AddAddressModal
        email={email}
        type={selectType}
        open={showAddAddressModal}
        setOpen={setAddressModal}
        onClose={() => setAddressModal(false)}
      />
    </>
  );
};

export default Address;
