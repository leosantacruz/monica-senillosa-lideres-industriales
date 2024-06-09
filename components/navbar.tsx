import type { NextPage } from "next";
import { useCallback } from "react";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  const onContactButtonsContainer1Click = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <header
      className={`self-stretch flex flex-row items-center justify-center py-0 pr-[59px] pl-[60px] box-border gap-[10px] max-w-full text-left text-base text-main font-helvetica-neue mq800:pl-[30px] mq800:pr-[29px] mq800:box-border ${className}`}
    >
      <img
        className="h-[41px] w-[36.1px] relative"
        loading="lazy"
        alt=""
        src="/logo.svg"
      />
      <div className="flex-1 flex flex-row items-center justify-end py-0 pr-0 pl-[359px] box-border gap-[16px] max-w-full mq800:pl-[89px] mq800:box-border mq1150:hidden mq450:pl-5 mq450:box-border mq1350:pl-[179px] mq1350:box-border">
        <div className="rounded-21xl flex flex-row items-center justify-center py-[15px] px-[65px]">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[40px]">
            Inicio
          </a>
        </div>
        <div
          className="rounded-21xl flex flex-row items-center justify-center py-[15px] px-2.5 cursor-pointer"
          onClick={onContactButtonsContainer1Click}
        >
          <a className="[text-decoration:none] relative lowercase font-medium text-[inherit] whitespace-nowrap">
            ¿CÓMO LO HACEMOS?
          </a>
        </div>
        <div className="rounded-21xl flex flex-row items-center justify-center py-[15px] px-[66px]">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[37px]">
            Valor
          </a>
        </div>
        <div className="rounded-21xl flex flex-row items-center justify-center py-[15px] px-[51px]">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[67px] whitespace-nowrap">
            Sobre mi
          </a>
        </div>
        <button className="cursor-pointer [border:none] py-[15px] px-[46px] bg-[transparent] rounded-21xl [background:linear-gradient(180deg,_#c1ffd6,_#58da6d)] flex flex-row items-center justify-center">
          <a className="[text-decoration:none] relative text-lg font-medium font-helvetica-neue text-main text-left inline-block min-w-[77px] whitespace-nowrap">
            Contacto
          </a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;