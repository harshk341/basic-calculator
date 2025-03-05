import { useContext } from "react";
import { CalculatorContext } from "src/context/CalculatorContext";

const useCalculatorContext = () => useContext(CalculatorContext);

export default useCalculatorContext;
