import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="py-10 w-full flex justify-around items-center bg-bg-footer border-t border-stroke-footer">
      <Image src="/logo.svg" width={144.56} height={35.73} alt="logo" />
      <ul className="flex w-1/2 justify-between">
        <li>
          <Link href="https://github.com/Gabriel-Vict0r">
            Desenvolvedor: Gabriel Victor
          </Link>{" "}
        </li>
        <li>Copyright &copy;xmldiscover.com.br</li>
        <li>
          <Link href="/Termos">Termos de uso</Link>
        </li>
      </ul>
      <div></div>
    </footer>
  );
};

export default Footer;
