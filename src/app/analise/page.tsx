"use client";
import Cell from "@/components/Cell";
import ContainerNotes from "@/components/ContainerNotes";
import Main from "@/components/Main";
import Title from "@/components/Title";
import { useXmlContext } from "@/context/XmlContext";
import React from "react";

type Props = {};

const Analise = () => {
  const { analise } = useXmlContext();
  console.log(analise);
  const result = Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(analise.total!);
  const checkObj = Object.keys(analise).length > 0;
  return (
    <Main>
      <Title title="Análise dos XMLs" />
      <section className="w-full px-32 pt-10 flex justify-between">
        <div className="w-3/4">
          {checkObj ? (
            analise.canceled!.length > 0 ? (
              <ContainerNotes
                title="Notas Canceladas"
                arrNotes={analise.canceled}
              />
            ) : (
                <ContainerNotes
                  title="Sem notas canceladas"
                  hasContent={false}
                />
              ) && analise.withoutProt!.length > 0 ? (
              <ContainerNotes
                title="Notas sem o protocolo"
                arrNotes={analise.withoutProt}
              />
            ) : (
                <ContainerNotes
                  title="Sem notas com protocolo ausente"
                  hasContent={false}
                />
              ) && analise.wrongDate!.length > 0 ? (
              <ContainerNotes
                title="Notas fora do período"
                arrNotes={analise.wrongDate}
              />
            ) : (
              <ContainerNotes
                title="Sem notas fora do período"
                hasContent={false}
              />
            )
          ) : null}
        </div>
        <div className="w-1/5">
          {checkObj && (
            <div className="w-full bg-bg-container rounded-2xl border border-stroke-container p-5">
              <h3 className="border border-stroke-cell p-2 rounded-t-2xl">
                Valor Total
              </h3>
              <div className="border border-stroke-cell rounded-b-2xl w-full flex justify-between">
                <Cell
                  width="w-1/2"
                  value="R$"
                  position="text-end"
                  border={true}
                />
                <Cell width="w-1/2" value={result} border={true} bLeft={true} />
              </div>
            </div>
          )}
        </div>
      </section>
    </Main>
  );
};

export default Analise;
