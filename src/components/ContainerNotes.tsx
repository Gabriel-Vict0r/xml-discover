import React from "react";
import Cell from "./Cell";

type Props = {
  title: string;
  arrNotes?: Object[];
};

const ContainerNotes = (props: Props) => {
  return (
    <div className="w-full bg-bg-container rounded-2xl border border-stroke-container p-5">
      <h3 className="border border-stroke-cell p-2 rounded-t-2xl">
        {props.title}
      </h3>
      <div className="w-full flex justify-between">
        <Cell width="w-1/3" value="Número" />
        <Cell width="w-full" value="Cliente" />
        <Cell width="1/3" value="Valor" />
      </div>
      <div className="w-full flex justify-between">
        <Cell width="w-1/3" value="Número" />
        <Cell width="w-full" value="Cliente" />
        <Cell width="1/3" value="Valor" />
      </div>
      <div className="border border-stroke-cell rounded-b-2xl w-full justify-between">
        <p></p>
      </div>
    </div>
  );
};

export default ContainerNotes;
