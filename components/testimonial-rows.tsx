import type { NextPage } from "next";

export type TestimonialRowsType = {
  className?: string;
  group14?: string;
};

const TestimonialRows: NextPage<TestimonialRowsType> = ({
  className = "",
  group14,
}) => {
  return (
    <div
      className={`w-[522px] shrink-0 flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-left text-5xl text-darkslategray-200 font-helvetica-neue mq800:gap-[60px] mq450:gap-[30px] ${className}`}
    >
      <div className="flex-1 rounded-3xl bg-white box-border flex flex-col items-start justify-start py-7 px-[29px] gap-[24px] max-w-full border-[3px] border-solid border-lightblue">
        <img
          className="w-[90px] h-[90px] relative object-contain"
          loading="lazy"
          alt=""
          src={group14}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <b className="relative leading-[150%] font-bold inline-block min-w-[95px] mq450:text-lgi mq450:leading-[29px]">
              Joe Doe
            </b>
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/kid-star.svg"
              />
            </div>
          </div>
          <div className="self-stretch relative text-sm leading-[150%] text-slategray">
            El programa de liderazgo ha sido transformador para nuestra empresa.
            Hemos visto una mejora notable en la cohesión del equipo y en la
            eficiencia de nuestros procesos."_ – Juan Pérez, Gerente de
            Producción
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialRows;