"use client";
import ContainerNotes from "@/components/ContainerNotes";
import Main from "@/components/Main";
import Title from "@/components/Title";
import { useXmlContext } from "@/context/XmlContext";
import React from "react";

type Props = {};

const Analise = (props: any) => {
  const { analise } = useXmlContext();
  console.log(analise);
  return (
    <Main>
      <Title title="Análise dos XMLs" />
      <section className="w-full px-32 pt-10">
        <div className="w-3/4">
          <ContainerNotes title="Notas Canceladas" />
        </div>
        <div></div>
      </section>
    </Main>
  );
};

export default Analise;
