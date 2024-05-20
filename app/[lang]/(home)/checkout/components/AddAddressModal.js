"use client";
import CommonButton from "@/components/CommonButton";
import CommonModal from "@/components/CommonModal";
import CommonInput from "@/components/input/CommonInput";
import React, { useState } from "react";

const AddAddressModal = ({ open, setOpen, type,email }) => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [houseName, setHouseName] = useState("");

  const handleSubmit=async(e)=>{
   e.eventDefault();
   const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "api/address",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, title, address, contact, postalCode, houseName, address_type:type}),
    }
  );

  const data = await response.json();
  }

  return (
    <div>
      <CommonModal
        open={open}
        setOpen={setOpen}
        body={
          <form onSubmit={handleSubmit} className="space-y-4">
            <CommonInput
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CommonInput
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <CommonInput
              label="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <CommonInput
              label="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <CommonInput
              label="House Name"
              value={houseName}
              onChange={(e) => setHouseName(e.target.value)}
            />
            <div className="flex items-center justify-center">
              <CommonButton type="submit" width="w-[120px]" btnLevel="Saved" />
            </div>
          </form>
        }
      />
    </div>
  );
};

export default AddAddressModal;
