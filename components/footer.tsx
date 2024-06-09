import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch rounded-t-81xl rounded-b-none bg-ghostwhite flex flex-col items-end justify-start py-[60px] px-[79px] box-border gap-[24px] max-w-full text-left text-5xl text-darkslategray-200 font-helvetica-neue mq800:pl-[39px] mq800:pr-[39px] mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
          <div className="rounded-sm flex flex-row items-end justify-start pt-0 px-0 pb-3 gap-[11.9px]">
            <div className="flex flex-col items-start justify-start gap-[28px]">
              <img
                className="w-[36.1px] h-[41px] relative"
                loading="lazy"
                alt=""
                src="/home-app-logo.svg"
              />
              <div className="w-8 rounded box-border flex flex-row items-start justify-start py-1.5 pr-1.5 pl-[7px] border-[1px] border-solid border-gainsboro">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <img
                    className="h-[17px] w-[17px] relative"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className="h-[35.29%] w-[35.88%] absolute !m-[0] top-[32.35%] right-[31.76%] bottom-[32.35%] left-[32.35%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[37px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-3">
                <div className="relative tracking-[0.02em] font-medium mq450:text-lgi">
                  Lideres industriales
                </div>
              </div>
              <div className="w-8 h-8 rounded box-border flex flex-col items-center justify-center border-[1px] border-solid border-gainsboro">
                <img
                  className="w-[17.9px] h-[17.8px] relative"
                  alt=""
                  src="/group-89.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[397px] flex flex-row items-start justify-start gap-[16px] max-w-full text-base text-main mq450:flex-wrap">
            <div className="rounded-21xl flex flex-row items-start justify-start py-[15px] px-2.5">
              <div className="relative font-medium inline-block min-w-[40px]">
                Inicio
              </div>
            </div>
            <div className="rounded-21xl flex flex-row items-start justify-start py-[15px] px-2.5">
              <div className="relative font-medium inline-block min-w-[67px]">
                Sobre mi
              </div>
            </div>
            <div className="flex-1 rounded-21xl flex flex-row items-start justify-start py-[15px] px-2.5 box-border min-w-[73px]">
              <div className="relative font-medium inline-block min-w-[93px]">
                Metodología
              </div>
            </div>
            <div className="rounded-21xl flex flex-row items-start justify-start py-[15px] px-2.5">
              <div className="relative font-medium inline-block min-w-[69px]">
                Contacto
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/footer-divider.svg"
        />
      </div>
      <p className="m-0 relative text-sm font-poppins text-slategray text-right inline-block max-w-full">
        ©Copyright Lideres Industriales. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;