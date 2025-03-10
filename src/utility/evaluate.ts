import { evaluate } from "mathjs";

const evaluateExpression = (expression: string): number => {
  const result = evaluate(expression);
  if (isNaN(result)) {
    throw new Error();
  }
  return result;
};

export default evaluateExpression;
