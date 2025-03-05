import * as React from "react";

interface InputProps {
  classes: string;
  value: string;
  error: string | null;
}

const Input: React.FC<InputProps> = ({ classes, value, error }) => {
  return (
    <>
      <div
        className={`w-100% h-[100px] flex justify-end items-end p-3 border-2 border-[#d2d2d2] rounded-lg ${classes}`}
      >
        <div className="w-100% overflow-hidden">
          <span className="float-right text-[1.8rem] leading-none whitespace-nowrap">
            {!error ? value : error}
          </span>
        </div>
      </div>
    </>
  );
};

export default Input;
