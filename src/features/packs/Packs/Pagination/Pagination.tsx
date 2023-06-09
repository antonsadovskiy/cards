import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import React from "react";
import style from "features/packs/Packs/Pagination/Pagination.module.css";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { paramsActions } from "features/params/paramsSlice";
import { selectorIsLoading } from "app/appSelectors";
import {
  selectorCardPacksTotalCount,
  selectorPage,
  selectorPageCount,
} from "features/packs/packsSelectors";

const MyPagination = () => {
  const dispatch = useAppDispatch();

  const page = useAppSelector(selectorPage);
  const pageCount = useAppSelector(selectorPageCount);
  const cardPacksTotalCount = useAppSelector(selectorCardPacksTotalCount);
  const isLoading = useAppSelector(selectorIsLoading);

  const lastPage = Math.ceil(cardPacksTotalCount / pageCount);

  const onChangePageHandler = (event: any, page: number) => {
    dispatch(paramsActions.setPage({ page }));
  };
  const onChangePageCountHandler = (event: any) => {
    const pageCount = event.target.value;
    dispatch(paramsActions.setPageCount({ pageCount }));
  };

  return (
    <div className={style.pagination}>
      <Pagination
        color="primary"
        page={page}
        count={lastPage}
        disabled={isLoading}
        shape="rounded"
        onChange={onChangePageHandler}
      />
      <span>Show</span>
      <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
        <Select
          disabled={isLoading}
          value={pageCount}
          onChange={onChangePageCountHandler}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <span>Cards per Page</span>
    </div>
  );
};

export default MyPagination;
