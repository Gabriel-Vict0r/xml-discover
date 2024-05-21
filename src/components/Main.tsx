import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}
const Main = (props: IChildren) => {
  return (
    <main className="w-full text-center py-28 flex flex-col gap-4 items-center">
      {props.children}
    </main>
  );
};

export default Main;
