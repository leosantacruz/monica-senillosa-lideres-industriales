import type { NextPage } from "next";
import TestimonialRows from "./testimonial-rows";

export type TestimoniesType = {
  className?: string;
};

const Testimonies: NextPage<TestimoniesType> = ({ className = "" }) => {
  return (
    <section
      className={`h-[618px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[48px] max-w-full text-left text-23xl text-gray-200 font-helvetica-neue mq800:gap-[24px] mq450:h-auto ${className}`}
    >
      <div className="w-[923px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[32px] max-w-full shrink-0 mq450:gap-[16px]">
        <div className="w-[706px] flex flex-col items-center justify-start max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[60px] font-normal font-inherit mq800:text-15xl mq800:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
             Lo Que Dicen Nuestros Participantes
          </h1>
        </div>
        <div className="self-stretch relative text-lg leading-[150%] font-medium text-slategray text-center">
          Nuestros participantes han experimentado cambios significativos en su
          forma de liderar y en los resultados de sus equipos. Aquí algunos
          testimonios:
        </div>
      </div>
      <div className="w-[1440px] overflow-x-auto flex flex-row items-start justify-center pt-0 px-0 pb-[219px] box-border gap-[24px] max-w-full shrink-0 text-5xl text-darkslategray-200 mq800:pb-[142px] mq800:box-border">
        <TestimonialRows group14="/group-14@2x.png" />
        <TestimonialRows group14="/group-16@2x.png" />
        <TestimonialRows group14="/group-15@2x.png" />
      </div>
    </section>
  );
};

export default Testimonies;