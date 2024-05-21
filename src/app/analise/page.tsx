"use client";
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
      {analise && analise.map((element) => <p>{element.key}</p>)}
    </Main>
  );
};

export default Analise;
