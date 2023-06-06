export const convertDate = (date: string) => {
  const ymd = date.slice(0, 10).replaceAll("-", ".");
  const y = ymd.slice(0, 4);
  const m = ymd.slice(5, 7);
  const d = ymd.slice(8.1);
  const hms = date.slice(11, 19);
  return `${d}.${m}.${y} ${hms}`;
};
