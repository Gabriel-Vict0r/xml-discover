"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IXml {
  analise: Array<Object>;
  setAnalise: React.Dispatch<React.SetStateAction<never[]>>;
}

interface IXmlProvider {
  children: ReactNode;
}
const XmlContext = createContext<IXml>({
  analise: [],
  setAnalise: () => [],
});

const XmlProvider = ({ children }: IXmlProvider) => {
  const [analise, setAnalise] = useState([]);
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
