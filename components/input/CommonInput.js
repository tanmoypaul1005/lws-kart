import React from "react";

const CommonInput = ({label ="",value="",disabled=false}) => {
  return (
    <div>
      <label for="company" className="text-gray-600">
        {label}
      </label>
      <input disabled={disabled} value={value} type="text" name="company" id="company" className="input-box" />
    </div>
  );
};

export default CommonInput;
