import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "common/hooks";

const Pack = () => {
  const params = useParams();
  const pack = useAppSelector((state) =>
    state.packs.cardPacks.find((pack) => pack._id === params.id)
  );
  return (
    <div>
      <h1>{pack?.name}</h1>
      <h1>{pack?.grade}</h1>
      <div>{pack?.user_name}</div>
      <div>{pack?.type}</div>
      <div>{pack?.rating}</div>
      <div>{pack?.shots}</div>
    </div>
  );
};

export default Pack;
