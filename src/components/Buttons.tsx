import * as React from "react";

interface ButtonProps {
  classes?: string;
  value: string | React.ReactNode;
}

const Buttons: React.FC<ButtonProps> = ({ classes, value }) => {
  return (
    <>
      <div
        className={`flex justify-center items-center bg-[#505050] h-[50px] rounded-full cursor-pointer ${classes} text-white active:scale-90 transition-all select-none`}
        onClick={() => {
          console.log(value);
        }}
      >
        {value}
      </div>
    </>
  );
};

export default Buttons;
