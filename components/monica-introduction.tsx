import type { NextPage } from "next";

export type MonicaIntroductionType = {
  className?: string;
  personBook?: string;
  holaSoyMnica?: string;
};

const MonicaIntroduction: NextPage<MonicaIntroductionType> = ({
  className = "",
  personBook,
  holaSoyMnica,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-23xl text-gray-200 font-helvetica-neue ${className}`}
    >
      <div className="w-[49px] h-[49px] rounded-41xl bg-aquamarine-100 flex flex-row items-center justify-center py-[9.5px] px-[9px] box-border">
        <img
          className="h-[30px] w-[30px] relative"
          loading="lazy"
          alt=""
          src={personBook}
        />
      </div>
      <h1 className="m-0 relative text-inherit leading-[60px] font-normal font-inherit mq800:text-15xl mq800:leading-[48px] mq450:text-6xl mq450:leading-[36px]">
        {holaSoyMnica}
      </h1>
    </div>
  );
};

export default MonicaIntroduction;