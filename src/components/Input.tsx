import * as React from "react";

interface InputProps {
  classes: string;
  value: string;
  error: string | null;
  ans: number | null;
  result: number | null;
  showAns: boolean;
}

const Input: React.FC<InputProps> = ({
  classes,
  value,
  error,
  result,
  ans,
  showAns,
}) => {
  return (
    <>
      <div
        className={`w-full h-[100px] flex flex-col justify-between items-start p-3 border-2 border-[#d2d2d2] rounded-lg ${classes}`}
      >
        <div className="w-full overflow-hidden">
          <span className="float-right text-[1rem] leading-none whitespace-nowrap">
            {showAns ? `Ans = ${ans || 0}` : value ? `${value} =` : ""}
          </span>
        </div>
        <div className="w-full overflow-hidden">
          <span className="float-right text-[1.8rem] leading-none whitespace-nowrap">
            {!error ? (result !== null ? result : value || 0) : error}
          </span>
        </div>
      </div>
    </>
  );
};

export default Input;
