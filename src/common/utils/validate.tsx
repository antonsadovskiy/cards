export const validateEmail = {
  matchPattern: (v: string) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    "Invalid email address",
};