import type { NextPage } from "next";

export type BenefitItemsType = {
  className?: string;
  desvincularAAlguienYAfron?: string;
};

const BenefitItems: NextPage<BenefitItemsType> = ({
  className = "",
  desvincularAAlguienYAfron,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-lg text-darkslategray-200 font-helvetica-neue mq800:flex-wrap ${className}`}
    >
      <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
        <img
          className="w-[13px] h-2.5 relative"
          loading="lazy"
          alt=""
          src="/check.svg"
        />
      </div>
      <div className="flex-1 relative leading-[150%] inline-block min-w-[367px] max-w-full mq800:min-w-full">
        {desvincularAAlguienYAfron}
      </div>
    </div>
  );
};

export default BenefitItems;