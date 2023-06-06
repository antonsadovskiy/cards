export const changeSort = (sort: string, down: string, up: string) => {
  switch (sort) {
    case "":
      return down;
    case down:
      return up;
    case up:
      return "";
    default:
      return down;
  }
};
