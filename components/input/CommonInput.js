import React from "react";

const CommonInput = ({label =""}) => {
  return (
    <div>
      <label for="company" className="text-gray-600">
        {label}
      </label>
      <input type="text" name="company" id="company" className="input-box" />
    </div>
  );
};

export default CommonInput;
