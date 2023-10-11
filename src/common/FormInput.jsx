import React from "react";

const FormInput = ({ onChange, className, value, name, type, placeholder }) => {
   return (
      <input
         placeholder={placeholder}
         type={type}
         className={`montery h-[45px] w-full border-b-[1px] border-[#7C6F61] bg-transparent text-[20px] font-semibold text-[#7C6F61] 
                            ${className || ""}
                           `}
         name={name}
         value={value}
         onChange={onChange}
      />
   );
};

export default FormInput;