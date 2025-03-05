import * as React from "react";

type initialCalculatorType = {
  expression: string;
  result: number | null;
  error: string | null;
  ans: number | null;
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

type PayloadActionType<T = string> = {
  type: Types;
  payload?: T;
};

const initialCalculatorState: initialCalculatorType = {
  expression: "",
  result: null,
  error: null,
  ans: null,
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
    return { ...state, expression: state.expression + (action.payload || "") };
  },
  CLEAR_ALL: (): initialCalculatorType => {
    return { ...initialCalculatorState };
  },
  CLEAR_ENTRY: (state: initialCalculatorType): initialCalculatorType => {
    return { ...state, expression: state.expression.slice(0, -1) };
  },
  EVALUATE: (state: initialCalculatorType): initialCalculatorType => {
    try {
      // to be implemented

      return { ...state };
    } catch {
      return { ...state, error: "Invalid Expression" };
    }
  },
  USE_ANS: (state: initialCalculatorType): initialCalculatorType => {
    return {
      ...state,
      expression:
        state.expression + (state.ans !== null ? state.ans.toString() : ""),
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
