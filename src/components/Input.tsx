import * as React from "react";

interface InputProps {
  classes: string;
}

const Input: React.FC<InputProps> = ({ classes }) => {
  return (
    <>
      <div
        className={`w-100% h-[100px] border-2 border-[#d2d2d2] rounded-lg ${classes}`}
      ></div>
    </>
  );
};

export default Input;
