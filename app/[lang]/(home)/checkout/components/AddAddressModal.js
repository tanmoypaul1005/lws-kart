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
            {/* <CommonInput label="District" /> */}
            <CommonInput label="Postal Code" />
            <CommonInput label="House Name" />
          </div>
        }
      />
    </div>
  );
};

export default AddAddressModal;
