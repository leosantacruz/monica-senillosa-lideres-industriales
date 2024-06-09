import type { NextPage } from "next";
import CompaniesCount from "./companies-count";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-tl-none rounded-tr-281xl rounded-b-none bg-honeydew-100 flex flex-row items-start justify-center pt-[83px] pb-[52.5px] pr-0 pl-[60px] box-border gap-[60px] max-w-full text-left text-base text-darkslategray-100 font-inter mq800:gap-[30px] mq800:pt-[54px] mq800:pb-[34px] mq800:box-border mq450:gap-[15px] mq1350:flex-wrap mq1350:pl-5 mq1350:pr-5 mq1350:box-border ${className}`}
    >
      <div className="w-[401px] flex flex-col items-start justify-start gap-[24px] max-w-full text-41xl text-black font-helvetica-neue">
        <h1 className="m-0 self-stretch relative text-inherit leading-[127%] font-normal font-inherit mq800:text-29xl mq800:leading-[61px] mq450:text-17xl mq450:leading-[46px]">
          Certificación de Líderes Industriales
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-100">
          Nuestro programa ayuda a líderes a alcanzar su potencial y alinear sus
          habilidades con las necesidades de la organización. Ideal para equipos
          que necesitan mejorar en gestión eficiente.
        </div>
        <button className="cursor-pointer [border:none] py-[15px] px-[46px] bg-[transparent] rounded-21xl [background:linear-gradient(180deg,_#c1ffd6,_#58da6d)] flex flex-row items-start justify-start">
          <div className="relative text-lg font-medium font-helvetica-neue text-main text-left inline-block min-w-[77px]">
            Contacto
          </div>
        </button>
      </div>
      <div className="w-[404px] flex flex-col items-start justify-start pt-[273px] px-0 pb-0 box-border max-w-full mq450:pt-[177px] mq450:box-border">
        <div className="w-[211px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[48px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2">
            <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 relative">
              <img
                className="h-[581px] w-[464px] absolute !m-[0] top-[-316px] right-[-356px] rounded-t-181xl rounded-b-none object-cover"
                loading="lazy"
                alt=""
                src="/portraitofcompanyleadersandtheiremployeesin20231127050633utc-1@2x.png"
              />
              <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[1]">
                <div className="flex-1 rounded-3xl bg-white flex flex-row items-start justify-start p-6">
                  <b className="relative leading-[150%] font-bold">
                    PRODUCTIVIDAD
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[1]">
            <div className="rounded-3xl bg-white flex flex-row items-start justify-start p-6">
              <b className="relative leading-[150%] font-bold inline-block min-w-[117px]">
                RENTABILIDAD
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[455px] flex flex-col items-start justify-start pt-[67.5px] px-0 pb-0 box-border max-w-full mq800:pt-11 mq800:box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[39px] mq450:flex-wrap mq450:gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[92px] pr-[17px] pl-0 box-border min-w-[118px] min-h-[165px]">
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start z-[1]">
              <div className="flex-1 rounded-3xl bg-white flex flex-row items-start justify-start p-6">
                <b className="relative leading-[150%] font-bold inline-block min-w-[117px]">
                  RENTABILIDAD
                </b>
              </div>
            </div>
          </div>
          <div className="w-[137px] flex flex-col items-start justify-start gap-[40px] text-41xl text-lightgreen font-helvetica-neue">
            <div className="self-stretch rounded-3xl flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-[12px]">
              <div className="self-stretch h-[59px] relative leading-[127%] inline-block shrink-0 mq800:text-13xl mq800:leading-[61px] mq450:text-5xl mq450:leading-[46px]">
                <span>30</span>
                <span className="text-21xl">%</span>
              </div>
              <b className="self-stretch relative text-base leading-[150%] font-bold font-inter text-darkslategray-100">
                <p className="m-0">{`EMPRESAS `}</p>
                <p className="m-0">CERTIFICADAS</p>
              </b>
            </div>
            <CompaniesCount />
            <CompaniesCount />
          </div>
          <div className="h-[286px] w-[58px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="rounded-tl-41xl rounded-tr-none rounded-br-none rounded-bl-41xl bg-cornflowerblue overflow-hidden flex flex-row items-center justify-center py-[12.1px] px-5">
                <img
                  className="h-[17.8px] w-[17.9px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-2.svg"
                />
              </div>
              <div className="self-stretch h-[42px] rounded-tl-41xl rounded-tr-none rounded-br-none rounded-bl-41xl bg-cornflowerblue overflow-hidden shrink-0 flex flex-row items-center justify-center pt-3 pb-[13px] pr-[21px] pl-[19px] box-border relative">
                <img
                  className="h-[17px] w-[17px] absolute !m-[0] top-[12px] left-[19.5px]"
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;