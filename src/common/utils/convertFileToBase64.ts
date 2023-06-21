export const convertFileToBase64 = (
  file: File,
  callback: (value: string) => void
) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    const file64 = reader.result as string;
    callback(file64);
  };
  reader.readAsDataURL(file);
};
