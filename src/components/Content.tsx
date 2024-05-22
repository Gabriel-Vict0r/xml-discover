"use client";
import { useXmlContext } from "@/context/XmlContext";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Main from "./Main";
import Title from "./Title";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Combobox } from "./MonthInput";
type Props = {};

const Content = (props: Props) => {
  const { setAnalise } = useXmlContext();
  const [load, setLoad] = useState<boolean>(false);
  const MySwal = withReactContent(Swal);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (values) => {
      const filesLenght = values.files.length;
      const formData = new FormData();
      //console.log(values.files);
      for (let index = 0; index < filesLenght; index++) {
        formData.append("xml", values.files[index]);
      }
      const requestOptions = {
        headers: {},
        body: formData,
        method: "POST",
      };
      MySwal.fire({
        title: "Processando os xmls...",
        didOpen: () => MySwal.showLoading(),
        allowOutsideClick: false,
      });
      fetch(`${process.env.URL_API!}/xml`, requestOptions)
        .then((element) => {
          // const arrAnalise = (element.json() as unknown) as never[];
          // console.log("ao enviar", arrAnalise);
          // setAnalise(arrAnalise);
          return element.json();
        })
        .then((element) => setAnalise(element))
        .then(() => {
          MySwal.close();
          setLoad(false);
          router.push("/analise");
        })
        .catch((err) => {
          setLoad(false);
          throw new Error(err);
        });
    },
  });
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (formik.values.files.length > 0) {
      setRender(true);
    }
  }, [formik.values.files]);
  return (
    <Main>
      <Title title="Leitor de XML" />
      <p className="font-light text-xl">Carregue seus arquivos XML</p>
      <form
        action=""
        className="w-1/2 flex flex-col items-center"
        onSubmit={formik.handleSubmit}
        method="POST"
      >
        <div className="w-[358px] flex flex-col items-center gap-3">
          <Combobox />
          <label
            htmlFor="xml"
            className="border border-dashed border-borders w-full py-5 rounded-xl text-center cursor-pointer hover:border-white text-icon-add hover:text-primary ease-in-out "
          >
            <IoIosAddCircleOutline className=" text-4xl inline-block" />
          </label>
          <input
            type="file"
            name="xml"
            id="xml"
            className="hidden"
            accept=".xml"
            multiple
            onChange={(event) =>
              formik.setFieldValue("files", event.currentTarget.files)
            }
          />
          {render && (
            <p className="font-light text-slate-200">
              {formik.values.files.length} Xmls carregados
            </p>
          )}
          <input
            type="submit"
            value="Analisar"
            className="border border-borders w-full py-2 rounded-xl cursor-pointer hover:border-primary hover:bg-primary ease-in-out"
          />
        </div>
      </form>
    </Main>
  );
};

export default Content;
