import CommonButton from "@/components/CommonButton";
import CommonModal from "@/components/CommonModal";
import CommonInput from "@/components/input/CommonInput";
import React from "react";

const AddAddressModal = ({ open, setOpen }) => {
  return (
    <div>
      <CommonModal
        open={open}
        setOpen={setOpen}
        body={
          <div className="space-y-4">
            <CommonInput label="Title" />
            <CommonInput label="Address" />
            <CommonInput label="Contact" />
            <CommonInput label="Postal Code" />
            <CommonInput label="House Name" />

           <div className="flex items-center justify-center">
            <CommonButton width="w-[120px]" btnLevel="Saved"/>
            </div> 
          </div>
        }
      />
    </div>
  );
};

export default AddAddressModal;
