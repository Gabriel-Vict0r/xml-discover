import React from "react";

type Props = {
  width: string;
  value: string | number;
  position?: string;
  border?: boolean;
  bLeft?: boolean;
};

const Cell = (props: Props) => {
  return (
    <p
      className={` border-stroke-cell p-2 ${props.width} ${props.position} ${
        props.border ? "" : "border"
      } ${props.bLeft ? "border-l" : ""}`}
    >
      {props.value}
    </p>
  );
};

export default Cell;
