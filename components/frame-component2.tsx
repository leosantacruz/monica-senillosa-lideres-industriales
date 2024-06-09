import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent4 from "./frame-component4";
import FrameComponent3 from "./frame-component3";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const onIntroductionContainerClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start gap-[60px] max-w-full text-left text-23xl text-gray-200 font-helvetica-neue mq800:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-end py-0 pr-0 pl-[283px] box-border gap-[10px] max-w-full mq800:pl-[141px] mq800:box-border mq450:pl-5 mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-center min-w-[574px] max-w-full mq1150:min-w-full">
          <div className="flex-1 flex flex-col items-center justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="flex flex-col items-center justify-start gap-[16px] max-w-full">
              <div className="w-[95px] h-[95px] rounded-41xl bg-aquamarine-100 flex flex-row items-center justify-center p-[15px] box-border">
                <img
                  className="h-[65px] w-[65px] relative"
                  loading="lazy"
                  alt=""
                  src="/emoji-objects.svg"
                />
              </div>
              <h1 className="m-0 relative text-inherit leading-[60px] font-normal font-inherit mq800:text-15xl mq800:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
                ¿En qué consiste el PROGRAMA?
              </h1>
            </div>
            <div className="self-stretch relative text-lg leading-[150%] text-slategray text-center">
              <p className="m-0">
                Es un innovador y eficaz PROCESO de DESARROLLO PROFESIONAL Y
                ALINEACION del LIDER (Jefe/ Supervisor) A LO QUE LE DEMANDA SU
                ACTUAL PUESTO DE TRABAJO O LE DEMANDARA EL QUE ASPIRA CONSEGUIR.
                 
              </p>
              <p className="m-0">
                LE FACILITARA CAPACITARSE DE MANERA INTEGRAL PARA QUE  PUEDA
                GESTIONAR PROCESOS Y PERSONAS DE MANERA REALMENTE SATISFACTORIA
                PARA  SI MISMO,  PARA SU LIDER, SU EQUIPO Y LA ORGANIZACIÓN EN
                LA QUE ACTUA O ACTUARA.
              </p>
              <p className="m-0">
                Consiste en diagnosticar, comparar, comunicar, compartir e
                implementar varios recursos que le aportaremos, recibirá y lo
                fortalecerán (Ingenieria Industrial, Lean Manufacturing,
                Programación Neurolingüística -PNL-, Coaching, ) y sobre todo
                nuestro objetivo es que obtenga la experiencia, que ponga  en 
                práctica en la realidad cotidiana dichos recursos para que
                INTEGRE HABILIDADES BLANDAS y DURAS, SOFT SKILLS  Y  HARD
                SKILLS, TODAS LAS QUE NECESITE PARA LIDERAR PERSONAS Y PROCESOS
                EFICAZMENTE.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[264px] flex flex-col items-end justify-center py-5 pr-0 pl-[206px] box-border gap-[14px] mq450:pl-5 mq450:box-border">
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
      <div
        className="w-[1017px] flex flex-col items-start justify-start py-0 px-[60px] box-border gap-[60px] max-w-full cursor-pointer text-base text-slategray font-helvetica mq800:gap-[15px] mq1150:gap-[30px] mq1150:pl-[30px] mq1150:pr-[30px] mq1150:box-border"
        onClick={onIntroductionContainerClick}
      >
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[60px] mq1150:gap-[30px]">
          <div className="flex-1 shadow-[0px_9px_10.2px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white flex flex-col items-center justify-start pt-0 px-0 pb-[62px] box-border min-w-[194px] min-h-[487px] mq800:pb-10 mq800:box-border mq450:gap-[26px]">
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-6">
              <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                <FrameComponent4
                  nIVEL1="NIVEL 1"
                  volunteerActivism="/volunteer-activism.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]">
                  <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[4px]">
                    <div className="h-[27px] w-[27px] rounded-11xl flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                      <img
                        className="w-[13px] h-2.5 relative"
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className="relative leading-[150%] font-bold inline-block min-w-[76px]">
                      Liderazgo
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[4px]">
                    <div className="h-[27px] w-[27px] rounded-11xl flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                      <img
                        className="w-[13px] h-2.5 relative"
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className="relative leading-[150%] font-bold inline-block min-w-[76px]">
                      Soft skills
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-2.5 px-0 gap-[4px]">
                    <div className="h-[27px] w-[27px] rounded-11xl flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                      <img
                        className="w-[13px] h-2.5 relative"
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className="flex-1 relative leading-[150%]">
                      Ma
                      <span className="lowercase">
                        NEJO DE DOCUMENTACION ADMINISTRATIVA QUE DEBE SABER
                        UTILIZAR
                      </span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_9px_10.2px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white flex flex-col items-center justify-start pt-0 px-0 pb-[165px] box-border min-w-[194px] min-h-[487px] mq800:pb-[107px] mq800:box-border mq450:gap-[26px]">
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-6">
              <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                <FrameComponent4
                  nIVEL1="NIVEL 2"
                  volunteerActivism="/flare.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]">
                  <div className="flex flex-row items-center justify-center py-2.5 px-0 gap-[4px]">
                    <div className="h-[27px] w-[27px] rounded-11xl flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                      <img
                        className="w-[13px] h-2.5 relative"
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className="relative leading-[150%] font-bold inline-block min-w-[61px]">
                      NIVEL 1
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-0 gap-[4px]">
                    <div className="h-[27px] w-[27px] rounded-11xl flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
                      <img
                        className="w-[13px] h-2.5 relative"
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className="flex-1 relative leading-[150%]">
                      Inteligencia emocional y Negociación
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_9px_10.2px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white flex flex-col items-center justify-start min-w-[194px] mq450:gap-[26px]">
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-6">
              <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                <FrameComponent4
                  nIVEL1="NIVEL 3"
                  volunteerActivism="/flare.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]">
                  <FrameComponent3 certificacinProfesionalCo="Certificación profesional completa NIVEL 1 Y NIVEL 2" />
                  <FrameComponent3 certificacinProfesionalCo=" LEAN EN DOS MOLULOS (I MEJORA CONTINUA EN LOS PROCESOS, II AUTOCONTONTROL DE CALIDAD DE LOS PROCESOS)" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-lg leading-[150%] font-helvetica-neue text-center">
          En cualquiera de los casos sugerimos realizar una evaluación
          psicotécnica para identificar si la persona esta en condición de
          alinearse a la cultura de la organización lo que favorecera su
          permanencia en ella) 
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;