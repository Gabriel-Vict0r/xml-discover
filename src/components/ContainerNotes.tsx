import React from "react";
import Cell from "./Cell";
import { INote } from "@/context/XmlContext";

type Props = {
  title: string;
  arrNotes?: INote[];
  hasContent?: boolean;
};

const ContainerNotes = (props: Props) => {
  console.log(props.arrNotes);
  let valueNote: number = 0;
  props.arrNotes?.map((el) => (valueNote += el.value));
  console.log(valueNote);
  return (
    <div className="w-full bg-bg-container rounded-2xl border border-stroke-container p-5">
      <h3
        className={`border border-stroke-cell p-2 rounded-t-2xl ${
          !props.hasContent ? "text-red-400" : ""
        }`}
      >
        {props.title}
      </h3>
      <div className="w-full flex justify-between">
        <Cell width="w-1/3" value="Número" />
        <Cell width="w-full" value="Cliente" />
        <Cell width="w-1/3" value="Valor" />
      </div>

      {props.arrNotes?.map((element, i) => (
        <div className="w-full flex justify-between" key={i}>
          <Cell width="w-1/3" value={element.noteNumber} />
          <Cell width="w-full" value="Cliente" />
          <Cell width="w-1/3" value={element.value} />
        </div>
      ))}
      <div className="border border-stroke-cell rounded-b-2xl w-full flex justify-between">
        <Cell
          width="w-full"
          value="Valor total"
          position="text-end"
          border={true}
        />
        <Cell width="w-1/4" value={valueNote} border={true} bLeft={true} />
      </div>
    </div>
  );
};

export default ContainerNotes;
