import * as React from "react";
import { isOperator } from "src/helpers";
import evaluateExpression from "src/utility/evaluate";
import { formatExpression } from "src/utility/validate";

type initialCalculatorType = {
  expression: string;
  result: number | null;
  error: string | null;
  ans: number | null;
  isNewInput: boolean;
  showAns: boolean;
};

type CalculatorContextType = initialCalculatorType & {
  addInput: (data: string) => void;
  clearEntry: () => void;
  clearAll: () => void;
  lastAns: () => void;
  evaluate: () => void;
};

enum Types {
  ADD_INPUT = "ADD_INPUT",
  CLEAR_ALL = "CLEAR_ALL",
  CLEAR_ENTRY = "CLEAR_ENTRY",
  EVALUATE = "EVALUATE",
  USE_ANS = "USE_ANS",
}

type PayloadActionType = {
  type: Types;
  payload?: string | Partial<initialCalculatorType>;
};

const initialCalculatorState: initialCalculatorType = {
  expression: "",
  result: null,
  error: null,
  ans: null,
  isNewInput: true,
  showAns: false,
};

export const CalculatorContext = React.createContext<CalculatorContextType>({
  ...initialCalculatorState,
  addInput: () => {},
  clearEntry: () => {},
  clearAll: () => {},
  lastAns: () => {},
  evaluate: () => {},
});

const handler = {
  ADD_INPUT: (
    state: initialCalculatorType,
    action: PayloadActionType
  ): initialCalculatorType => {
    if (state.isNewInput) {
      return {
        ...state,
        expression: formatExpression(action.payload as string),
        isNewInput: false,
        showAns: true,
        result: null,
      };
    }
    return {
      ...state,
      expression: formatExpression(state.expression + action.payload),
      result: null,
      error: null,
      showAns: true,
    };
  },
  CLEAR_ALL: (): initialCalculatorType => {
    return { ...initialCalculatorState };
  },
  CLEAR_ENTRY: (state: initialCalculatorType): initialCalculatorType => {
    return { ...state, expression: state.expression.slice(0, -1) };
  },
  EVALUATE: (state: initialCalculatorType): initialCalculatorType => {
    try {
      const result = evaluateExpression(state.expression || "0");
      return {
        ...state,
        result,
        ans: result,
        error: null,
        showAns: false,
        isNewInput: true,
      };
    } catch {
      return { ...state, error: "Error", showAns: false };
    }
  },
  USE_ANS: (state: initialCalculatorType): initialCalculatorType => {
    return {
      ...state,
      expression:
        state.expression + (state.ans !== null ? state.ans.toString() : "0"),
    };
  },
  CLEAR_RESULT: (state: initialCalculatorType): initialCalculatorType => {
    return {
      ...state,
      result: null,
    };
  },
};

const reducer = (
  state: typeof initialCalculatorState,
  action: PayloadActionType
): typeof initialCalculatorState => {
  return handler[action.type] ? handler[action.type](state, action) : state;
};

export const CalculatorProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialCalculatorState);

  const addInput = (data: string) => {
    if (state.result !== null) {
      if (isOperator(data)) {
        dispatch({ type: Types.ADD_INPUT, payload: state.result + data });
        return;
      }
    }
    dispatch({ type: Types.ADD_INPUT, payload: data });
  };

  const clearEntry = () => {
    dispatch({ type: Types.CLEAR_ENTRY });
  };

  const clearAll = () => {
    dispatch({ type: Types.CLEAR_ALL });
  };

  const lastAns = () => {
    dispatch({ type: Types.USE_ANS });
  };

  const evaluate = () => {
    dispatch({ type: Types.EVALUATE });
  };

  return (
    <CalculatorContext.Provider
      value={{ ...state, addInput, clearEntry, clearAll, lastAns, evaluate }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
