import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import React, { FC } from "react";
import style from "common/components/Pagination/Pagination.module.css";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";

type PropsType = {
  page: number;
  pageCount: number;
  totalCount: number;
  type: "Cards" | "Packs";
  changePageHandler: (page: number) => void;
  changePageCountHandler: (pageCount: number) => void;
};

const MyPagination: FC<PropsType> = (props) => {
  const isLoading = useAppSelector(selectorIsLoading);

  const lastPage = Math.ceil(props.totalCount / props.pageCount);

  const onChangePageHandler = (event: any, page: number) => {
    props.changePageHandler(page);
  };

  const onChangePageCountHandler = (event: any) => {
    const pageCount = event.target.value;
    props.changePageCountHandler(pageCount);
  };

  return (
    <div className={style.pagination}>
      <Pagination
        color="primary"
        page={props.page}
        count={lastPage}
        disabled={isLoading}
        shape="rounded"
        onChange={onChangePageHandler}
      />
      <div className={style.count}>
        <span>Show</span>
        <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
          <Select
            disabled={isLoading}
            value={props.pageCount}
            onChange={onChangePageCountHandler}
          >
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <span>{props.type} per Page</span>
      </div>
    </div>
  );
};

export default MyPagination;
