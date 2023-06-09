export const cutTheString = (str: string, maxSymbols: number) => {
  return `${str.slice(0, maxSymbols)}${str.length > maxSymbols ? "..." : ""}`;
};
