import type { NextPage } from "next";
import { useCallback } from "react";
import BenefitsItems from "./benefits-items";

export type AboutUsType = {
  className?: string;
};

const AboutUs: NextPage<AboutUsType> = ({ className = "" }) => {
  const onBenefitsButtonClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-23xl text-gray-200 font-helvetica-neue ${className}`}
    >
      <div className="w-[1380px] rounded-41xl bg-aliceblue flex flex-row items-start justify-start py-0 pr-[60px] pl-0 box-border gap-[60px] max-w-full mq800:gap-[30px] mq1150:flex-wrap mq1150:pl-5 mq1150:pt-5 mq1150:pr-5 mq1150:box-border mq1350:pr-[30px] mq1350:box-border">
        <div className="w-[652px] flex flex-row items-start justify-start min-w-[652px] max-w-full mq800:min-w-full mq1150:flex-1">
          <img
            className="h-[1115px] flex-1 relative rounded-tl-none rounded-tr-21xl rounded-br-21xl rounded-bl-none max-w-full overflow-hidden object-cover mq1150:flex-1"
            loading="lazy"
            alt=""
            src="/workersmeetinginengineeringfactory20231127053341utc-1-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-[60px] px-0 box-border gap-[32px] min-w-[395px] max-w-full mq800:gap-[16px] mq800:pt-[25px] mq800:pb-[25px] mq800:box-border mq800:min-w-full mq1150:pt-[39px] mq1150:pb-[39px] mq1150:box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[32px] mq800:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[60px] h-[60px] rounded-11xl bg-aquamarine-100 flex flex-row items-center justify-center p-[9px] box-border">
                <img
                  className="h-[42px] w-[42px] relative"
                  loading="lazy"
                  alt=""
                  src="/book-2.svg"
                />
              </div>
              <h1 className="m-0 relative text-inherit leading-[60px] font-normal font-inherit mq800:text-15xl mq800:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
                ¿Para qué sirve definitivamente?
              </h1>
            </div>
            <div className="self-stretch relative text-lg leading-[150%] text-slategray">
              Sirve para incrementar la rentabilidad de la empresa a  través
              de: 
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-lg text-black">
            <div className="w-[434px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[16px] max-w-full">
              <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border shrink-0">
                <img
                  className="w-[13px] h-2.5 relative"
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <p className="m-0 relative shrink-0">
                Optimizar la calidad de los procesos y de los resultados a su
                cargo.
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                <img
                  className="w-[13px] h-2.5 relative"
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className="relative">Reducir el ausentismo en su área.</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] max-w-full">
              <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                <img
                  className="w-[13px] h-2.5 relative"
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className="relative">
                Estimular la predisposición a la Mejora Continua
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] max-w-full">
              <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                <img
                  className="w-[13px] h-2.5 relative"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className="relative">
                Fidelizar al personal y prevenir la rotación.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] max-w-full">
              <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                <img
                  className="w-[13px] h-2.5 relative"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className="relative">
                Evitar potenciales demandas laborales ante desvinculaciones
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq800:flex-wrap">
              <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                <img
                  className="w-[13px] h-2.5 relative"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <p className="m-0 h-[42px] flex-1 relative inline-block min-w-[367px] max-w-full mq800:min-w-full">
                Prevenir que empleados trabajen desmotivados o renuncien por
                mala relación con su líder (Jefe/supervisor) 
              </p>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq800:flex-wrap">
              <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                <img
                  className="w-[13px] h-2.5 relative"
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <p className="m-0 h-[42px] flex-1 relative inline-block min-w-[367px] max-w-full mq800:min-w-full">
                Contar con Líderes que apoyen al desarrollo de su personal en
                forma permanente
              </p>
            </div>
            <BenefitsItems concientizarYPredisponerA="Concientizar y predisponer a los lideres a generar y desarrollar segundas líneas calificadas (para que el equipo no sufra acefalia en los periodos en que el mismo requiera ausentarse, o delegar para ascender a otra posicion)" />
            <BenefitsItems concientizarYPredisponerA="Garantizar que la persona experimente una vinculación natural, efectiva y satisfactoria con las responsabilidades y tareas de su posición de Líder /jefe/supervisor) y las demás relaciones que debe establecer con las demás personas y el entorno de trabajo. " />
            <BenefitsItems concientizarYPredisponerA="Facilitar que sepa desaprender practica y hábitos que no resulta útiles para que pueda desarrollar nuevas actitudes y motivaciones complementarias a las que tiene, que le resultaran beneficiosas para mejorar su performance." />
          </div>
          <button
            className="cursor-pointer [border:none] py-[21.5px] px-10 bg-[transparent] rounded-21xl [background:linear-gradient(180deg,_#c1ffd6,_#58da6d)] flex flex-row items-center justify-center whitespace-nowrap"
            onClick={onBenefitsButtonClick}
          >
            <div className="relative text-lg font-medium font-helvetica-neue text-main text-left inline-block min-w-[90px]">
              Saber más
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;