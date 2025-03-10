import Buttons from "./Buttons";
import Input from "./Input";
import useCalculatorContext from "src/hooks/useCalculatorContext";

const Container = () => {
  const {
    expression,
    addInput,
    clearEntry,
    clearAll,
    lastAns,
    evaluate,
    error,
    ans,
    result,
    showAns,
  } = useCalculatorContext();
  return (
    <>
      <div className="w-full max-w-[550px] grid grid-cols-5 gap-4">
        <Input
          classes="col-span-5"
          value={expression}
          error={error}
          ans={ans}
          result={result}
          showAns={showAns}
        />
        <Buttons
          value="AC"
          onClick={() => {
            clearAll();
          }}
        />
        <Buttons
          value="CE"
          onClick={() => {
            if (result || error) {
              clearAll();
            } else {
              clearEntry();
            }
          }}
        />
        <Buttons
          value="("
          onClick={() => {
            addInput("(");
          }}
        />
        <Buttons
          value=")"
          onClick={() => {
            addInput(")");
          }}
        />
        <Buttons
          value="÷"
          onClick={() => {
            addInput("/");
          }}
        />

        <Buttons
          value="√"
          onClick={() => {
            addInput("sqrt(");
          }}
        />
        <Buttons
          value="1"
          onClick={() => {
            addInput("1");
          }}
        />
        <Buttons
          value="2"
          onClick={() => {
            addInput("2");
          }}
        />
        <Buttons
          value="3"
          onClick={() => {
            addInput("3");
          }}
        />
        <Buttons
          value="+"
          onClick={() => {
            addInput("+");
          }}
        />

        <Buttons
          value={
            <>
              x<sup>y</sup>
            </>
          }
          onClick={() => {
            addInput("^");
          }}
        />
        <Buttons
          value="4"
          onClick={() => {
            addInput("4");
          }}
        />
        <Buttons
          value="5"
          onClick={() => {
            addInput("5");
          }}
        />
        <Buttons
          value="6"
          onClick={() => {
            addInput("6");
          }}
        />
        <Buttons
          value="-"
          onClick={() => {
            addInput("-");
          }}
        />

        <Buttons
          value="x!"
          onClick={() => {
            addInput("!");
          }}
        />
        <Buttons
          value="7"
          onClick={() => {
            addInput("7");
          }}
        />
        <Buttons
          value="8"
          onClick={() => {
            addInput("8");
          }}
        />
        <Buttons
          value="9"
          onClick={() => {
            addInput("9");
          }}
        />
        <Buttons
          value="*"
          onClick={() => {
            addInput("*");
          }}
        />

        <Buttons
          value="Ans"
          onClick={() => {
            lastAns();
          }}
        />
        <Buttons
          value="%"
          onClick={() => {
            addInput("%");
          }}
        />
        <Buttons
          value="0"
          onClick={() => {
            addInput("0");
          }}
        />
        <Buttons
          value="."
          onClick={() => {
            addInput(".");
          }}
        />
        <Buttons
          value="="
          classes="bg-[#FF8000]"
          onClick={() => {
            evaluate();
          }}
        />
      </div>
    </>
  );
};

export default Container;
