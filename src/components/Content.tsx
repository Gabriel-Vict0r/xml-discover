import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

type Props = {};

const Content = (props: Props) => {
  return (
    <main className="w-full text-center py-28 flex flex-col gap-4 items-center">
      <h1 className="text-6xl font-bold">Leitor de XML</h1>
      <p className="font-light text-xl">Carregue seus arquivos XML</p>
      <form action="" className="w-1/2 flex flex-col items-center">
        <div className="w-[358px] flex flex-col items-center gap-3">
          <label
            htmlFor="xml"
            className="border border-dashed border-borders w-full py-5 rounded-xl text-center cursor-pointer"
          >
            <IoIosAddCircleOutline className="text-icon-add text-4xl inline-block" />
          </label>
          <input
            type="file"
            name="xml"
            id="xml"
            className="hidden"
            accept="xml"
            multiple
          />
          <input
            type="submit"
            value="Analisar"
            className="border border-borders w-full py-2 rounded-xl cursor-pointer"
          />
        </div>
      </form>
    </main>
  );
};

export default Content;
