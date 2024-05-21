import React from "react";

type Props = {
  width: string;
  value: string | number;
};

const Cell = (props: Props) => {
  return (
    <p className={`border border-stroke-cell p-2 ${props.width}`}>
      {props.value}
    </p>
  );
};

export default Cell;
