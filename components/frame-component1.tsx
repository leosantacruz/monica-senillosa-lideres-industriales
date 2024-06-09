import type { NextPage } from "next";
import MonicaIntroduction from "./monica-introduction";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-main font-helvetica-neue ${className}`}
    >
      <div className="w-[1226px] flex flex-col items-start justify-start gap-[120px] max-w-full mq800:gap-[60px] mq450:gap-[30px]">
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-10 box-border gap-[60px] max-w-full mq800:gap-[30px] mq1150:flex-wrap">
          <img
            className="w-[363px] relative rounded-xl max-h-full object-cover max-w-full mq1150:flex-1"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="h-[610px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[32px] min-w-[470px] max-w-full mq800:gap-[16px] mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full shrink-0 text-23xl text-gray-200 mq800:gap-[16px]">
              <MonicaIntroduction
                personBook="/person-book.svg"
                holaSoyMnica="Hola, soy Mónica"
              />
              <div className="self-stretch h-[397px] relative text-lg tracking-[-0.03px] leading-[150%] font-medium text-slategray inline-block shrink-0">
                <p className="m-0">
                  Fundadora de aQesi!  Master Practitioner y Trainer Certificado
                  en Programación Neurolinguistica Trabajo con PNL y otros
                  tantos recursos útiles, desde hace más de veinte años, en el
                  complejo y apasionante ámbito de las relaciones
                  interpersonales de negocios. Asesoro y facilito su desarrollo
                  profesional a líderes de Pymes industriales y de una variedad
                  de empresas de servicios (financieras, aseguradoras, de
                  ingeniería y tecnología, publicidad, salud, espectáculos, etc.
                  ) y a profesionales independientes y emprendedores en la
                  gestión de sus negocios. ¡Creo que la forma más fácil de
                  aprender, desarrollarnos y lograr los resultados que queremos
                  es jugando, seria y creativamente, diseñando estrategias,
                  poniendo el cuerpo en ello, “haciendo y haciendo” y
                  disfrutando el proceso! y así es como trabajo con mis
                  clientes! ¡¡Vivo en Argentina y de hacer lo que me gusta!!
                </p>
              </div>
            </div>
            <div className="rounded-21xl flex flex-row items-center justify-center gap-[10px]">
              <input
                className="m-0 h-6 w-6 relative min-h-[24px]"
                type="checkbox"
              />
              <div className="relative font-medium inline-block min-w-[115px]">
                Descargar CV
              </div>
            </div>
            <div className="rounded-21xl flex flex-row items-center justify-center gap-[10px]">
              <input
                className="m-0 h-6 w-6 relative min-h-[24px]"
                type="checkbox"
              />
              <div className="relative font-medium">
                menos texto link a lineknd
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-center text-81xl text-mediumaquamarine mq1350:pl-6 mq1350:pr-6 mq1350:box-border">
          <div className="flex-1 rounded-21xl bg-honeydew-200 flex flex-row flex-wrap items-start justify-start py-[24.5px] px-[69px] box-border gap-[10px] max-w-full mq1150:pl-[34px] mq1150:pr-[34px] mq1150:box-border">
            <h1 className="m-0 w-[45px] relative text-inherit leading-[150%] font-medium font-inherit inline-block mq800:text-31xl mq800:leading-[90px] mq450:text-11xl mq450:leading-[60px]">
              “
            </h1>
            <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[573px] max-w-full text-21xl text-darkslateblue mq1150:min-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-thin font-inherit mq800:text-13xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[36px]">{`La forma más fácil de aprender, desarrollarnos y lograr los resultados que queremos es jugando, `}</h1>
            </div>
            <h1 className="m-0 w-[45px] relative text-inherit leading-[150%] font-medium font-inherit inline-block mq800:text-31xl mq800:leading-[90px] mq450:text-11xl mq450:leading-[60px]">
              ”
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;