import Buttons from "./Buttons";
import Input from "./Input";

const Container = () => {
  return (
    <>
      <div className="w-full max-w-[550px] grid grid-cols-5 gap-4">
        <Input classes="col-span-5" />
        <Buttons value="AC" />
        <Buttons value="CE" />
        <Buttons value="(" />
        <Buttons value=")" />
        <Buttons value="÷" />

        <Buttons value="√" />
        <Buttons value="1" />
        <Buttons value="2" />
        <Buttons value="3" />
        <Buttons value="+" />

        <Buttons
          value={
            <>
              x<sup>y</sup>
            </>
          }
        />
        <Buttons value="4" />
        <Buttons value="5" />
        <Buttons value="6" />
        <Buttons value="-" />

        <Buttons value="x!" />
        <Buttons value="7" />
        <Buttons value="8" />
        <Buttons value="9" />
        <Buttons value="*" />

        <Buttons value="Ans" />
        <Buttons value="%" />
        <Buttons value="0" />
        <Buttons value="." />
        <Buttons value="=" classes="bg-[#FF8000]" />
      </div>
    </>
  );
};

export default Container;
