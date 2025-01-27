import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
   const [isShowPasword, setIsShowPassword] = useState(false);

   const toggleShowPasword = () => {
      setIsShowPassword(!isShowPasword);
   };

   return (
      <div className="flex items-center bg-cyan-600/5 px-5 rounded mb-3">
         <input
            value={value}
            onChange={onChange}
            placeholder={placeholder || "Password"}
            type={isShowPasword ? "text" : "password"}
            className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
         />

         {isShowPasword ? (
            <FaRegEye
               size={22}
               className="text-primary cursor-pointer"
               onClick={() => toggleShowPasword()}
            />
         ) : (
            <FaRegEyeSlash
               size={22}
               className="text-slate-400 cursor-pointer"
               onClick={() => toggleShowPasword()}
            />
         )}
      </div>
   );
};

export default PasswordInput;
