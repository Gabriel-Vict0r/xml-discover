"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface INote {
  noteNumber: string;
  value: number;
  client?: string;
}
interface ObjNote {
  canceled?: Array<INote>;
  total?: number;
  withoutProt?: Array<INote>;
  wrongDate?: Array<INote>;
}
interface IXml {
  analise: ObjNote;
  setAnalise: React.Dispatch<React.SetStateAction<ObjNote>>;
}

interface IXmlProvider {
  children: ReactNode;
}
const XmlContext = createContext<IXml>({
  analise: {},
  setAnalise: () => {},
});

const XmlProvider = ({ children }: IXmlProvider) => {
  const [analise, setAnalise] = useState({});
  return (
    <XmlContext.Provider
      value={{
        analise,
        setAnalise,
      }}
    >
      {children}
    </XmlContext.Provider>
  );
};

const useXmlContext = () => {
  const context = useContext(XmlContext);
  if (!context) {
    throw new Error("useXmlContext must be inside a XmlProvider");
  } else return context;
};

export { useXmlContext, XmlProvider };
