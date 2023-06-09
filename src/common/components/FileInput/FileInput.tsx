import IconButton from "@mui/material/IconButton";
import { ChangeEvent, FC, ReactNode } from "react";
import { convertFileToBase64 } from "common/utils";
import { toast } from "react-toastify";

type PropsType = {
  changeFileHandler: (file: string) => void;
  children: ReactNode;
};

const FileInput: FC<PropsType> = (props) => {
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      if (file.size < 1000000) {
        convertFileToBase64(file, (file64) => {
          props.changeFileHandler(file64);
        });
      } else {
        toast.error("File is too large");
      }
    }
  };

  const onErrorHandler = () => alert("Такая картинка не подходит");

  return (
    <IconButton
      component={"label"}
      style={{
        borderRadius: "50px",
        border: "2px solid white",
        backgroundColor: "lightgray",
      }}
    >
      {props.children}
      <input
        type="file"
        style={{ display: "none" }}
        accept={"image/*"}
        onError={onErrorHandler}
        onChange={uploadHandler}
      />
    </IconButton>
  );
};

export default FileInput;
