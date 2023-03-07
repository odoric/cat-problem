import React from "react";
import { type CatRecord } from "./data";
import "./styles.css";

type Props = {
  cat: CatRecord;
};

export const CatPanel = (props: Props) => {
  const record = props.cat;
  return (
    <div className="cat-panel">
      <img className="cat-photo" src={record.imageUrl} alt={"Cat"} />
      <div className="cat-name">{record.name}</div>
      <div className="cat-breed">
        {record.breed} {"\u00B7"} {record.age}
      </div>
      <div className="cat-desc">{record.description}</div>
    </div>
  );
};
