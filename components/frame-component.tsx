import type { NextPage } from "next";
import MonicaIntroduction from "./monica-introduction";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[236px] box-border max-w-full text-left text-23xl text-gray-200 font-helvetica-neue mq1150:pb-[153px] mq1150:box-border mq450:pb-[99px] mq450:box-border ${className}`}
    >
      <div className="h-[618px] flex-1 rounded-xl bg-honeydew-300 flex flex-row items-start justify-start py-[152.5px] px-20 box-border gap-[60px] max-w-full mq800:h-auto mq800:gap-[15px] mq800:pt-16 mq800:pb-16 mq800:box-border mq1350:gap-[30px] mq1350:py-[99px] mq1350:px-10 mq1350:box-border">
        <div className="w-[569px] flex flex-col items-start justify-center gap-[42px] max-w-[calc(100%_-_711px)] shrink-0 mq800:gap-[21px] mq1150:hidden mq1150:max-w-full">
          <p className="m-0 self-stretch relative font-light mq800:text-15xl mq450:text-6xl">
            Estamos aquí para ayudarle a transformar el liderazgo en su
            organización.
          </p>
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px] max-w-full text-center text-13xl text-slategray">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[270px] pl-0 gap-[16px] mq800:pr-[135px] mq800:box-border mq450:pr-5 mq450:box-border">
              <img
                className="h-[33px] w-8 relative"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="flex-1 relative leading-[150%] font-light inline-block min-w-[163px] mq800:text-7xl mq800:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                 +54 123 456 789
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[16px] max-w-full text-left">
              <img
                className="h-[25px] w-8 relative"
                loading="lazy"
                alt=""
                src="/mail.svg"
              />
              <h2 className="m-0 flex-1 relative text-inherit leading-[150%] font-light font-inherit inline-block min-w-[307px] whitespace-nowrap max-w-full mq800:text-7xl mq800:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                 info@lideresindustriales.com
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-[-277.5px] flex-1 shadow-[0px_49px_111px_rgba(1,_19,_86,_0.28)] rounded-11xl bg-white flex flex-col items-start justify-start py-8 px-12 box-border max-w-[calc(100%_-_629px)] shrink-0 mq800:pl-6 mq800:pr-6 mq800:box-border mq1150:hidden mq1150:pt-[21px] mq1150:pb-[21px] mq1150:box-border mq1150:max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <MonicaIntroduction
                personBook="/headset-mic.svg"
                holaSoyMnica="Hablemos"
              />
              <div className="self-stretch relative text-lg leading-[150%] font-medium font-helvetica-neue text-slategray text-center">{`Si desea más información sobre nuestro programa o tiene alguna pregunta, no dude en ponerse en contacto con nosotros. `}</div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
                  <div className="self-stretch relative text-lg leading-[150%] font-helvetica-neue text-slategray text-left">
                    Nombre
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-[46px] rounded-3xs box-border min-w-[250px] border-[1px] border-solid border-main"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
                  <div className="self-stretch relative text-lg leading-[150%] font-helvetica-neue text-slategray text-left">
                    Empresa
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-[46px] rounded-3xs box-border min-w-[250px] border-[1px] border-solid border-main"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
                  <div className="self-stretch relative text-lg leading-[150%] font-helvetica-neue text-slategray text-left">
                    E-mail
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-[46px] rounded-3xs box-border min-w-[250px] border-[1px] border-solid border-main"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
                  <div className="self-stretch relative text-lg leading-[150%] font-helvetica-neue text-slategray text-left">
                    Teléfono
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-[46px] rounded-3xs box-border min-w-[250px] border-[1px] border-solid border-main"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
                  <div className="self-stretch relative text-lg leading-[150%] font-helvetica-neue text-slategray text-left">
                    Mensaje
                  </div>
                  <input
                    className="[outline:none] bg-[transparent] self-stretch h-[101px] rounded-3xs box-border min-w-[250px] border-[1px] border-solid border-main"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[21.5px] px-5 bg-[transparent] self-stretch rounded-21xl [background:linear-gradient(180deg,_#c1ffd6,_#58da6d)] flex flex-row items-center justify-center">
              <div className="relative text-lg font-medium font-helvetica-neue text-main text-left inline-block min-w-[52px]">
                Enviar
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;