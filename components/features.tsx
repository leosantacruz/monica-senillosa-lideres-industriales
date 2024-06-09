import type { NextPage } from "next";
import { useCallback } from "react";
import BenefitItems from "./benefit-items";

export type FeaturesType = {
  className?: string;
};

const Features: NextPage<FeaturesType> = ({ className = "" }) => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start max-w-full text-left text-23xl text-gray-200 font-helvetica-neue ${className}`}
    >
      <div className="w-[1380px] rounded-tl-41xl rounded-tr-none rounded-br-none rounded-bl-41xl bg-aliceblue flex flex-row items-start justify-start py-0 pr-0 pl-[60px] box-border gap-[60px] max-w-full mq800:gap-[30px] mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:pb-5 mq1150:box-border mq1350:pl-[30px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start py-[60px] px-0 box-border gap-[32px] min-w-[395px] max-w-full mq800:gap-[16px] mq800:min-w-full mq1150:pt-[39px] mq1150:pb-[39px] mq1150:box-border mq450:pt-[25px] mq450:pb-[25px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
            <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
              <div className="w-[60px] h-[60px] rounded-11xl bg-aquamarine-100 flex flex-row items-center justify-center pt-[14.3px] px-[17px] pb-[14.2px] box-border">
                <img
                  className="h-[31.5px] w-[24.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/bookmark-star.svg"
                />
              </div>
              <h1 className="m-0 relative text-inherit leading-[60px] font-normal font-inherit mq800:text-15xl mq800:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
                ¿Qué evita el Programa?
              </h1>
            </div>
            <div className="self-stretch relative text-lg leading-[150%] text-slategray">
              Entre otras cosas…(múltiples costos)
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-lg text-darkslategray-200">
            <BenefitItems desvincularAAlguienYAfron="Desvincular a alguien y afrontar los costos que ello implica, antes de implementar las mejores prácticas posibles para que el Lider (Jefe/Supervisor) permanezca en la organización y lo haga en su mejor nivel de productividad y motivación." />
            <BenefitItems desvincularAAlguienYAfron="Pérdidas de tiempo y la subutilización o derroche de recursos, disminuye el ausentismo por desmotivación o somatización de personas de su equipo, errores de interpretación y de ejecución de los trabajos requeridos." />
            <BenefitItems desvincularAAlguienYAfron="Deterioro de las relaciones interpersonales que influyen directamente en la calidad de vida laboral. (Disminuye los malos entendidos, asperezas, frustraciones, enojos y resentimientos.) Inhibe el aumento del estrés y los estados emocionales negativos como la ira, angustia, impotencia, resentimiento, desconcentración, etc." />
            <button
              className="cursor-pointer [border:none] py-[21.5px] px-10 bg-[transparent] rounded-21xl [background:linear-gradient(180deg,_#c1ffd6,_#58da6d)] flex flex-row items-center justify-center whitespace-nowrap"
              onClick={onFrameButtonClick}
            >
              <div className="relative text-lg font-medium font-helvetica-neue text-main text-left inline-block min-w-[90px]">
                Saber más
              </div>
            </button>
          </div>
        </div>
        <div className="w-[652px] flex flex-row items-start justify-start min-w-[652px] max-w-full mq800:min-w-full mq1150:flex-1">
          <img
            className="h-[819px] flex-1 relative rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl max-w-full overflow-hidden object-cover mq1150:flex-1"
            loading="lazy"
            alt=""
            src="/workersmeetinginengineeringfactory20231127053341utc-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;