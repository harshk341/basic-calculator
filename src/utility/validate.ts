export const formatExpression = (exp: string): string => {
  return exp.replace(
    /(^|[+\-*/%^sqrt!(])0+(\d+)[+\-*/%^sqrt!)]*|(^|[+\-*/%^sqrt!(])(\d+)(\.)(\d*)\.[+\-*/%^sqrt!)]*|^([+*/%!^])/g,
    (_, g1, g2, g3, g4, g5, g6, g7) => {
      if (g1 !== undefined) {
        return `${g1}${g2}`;
      } else if (g3 !== undefined) {
        return `${g3}${g4}${g5}${g6}`;
      } else {
        return `0${g7}`;
      }
    }
  );
};
