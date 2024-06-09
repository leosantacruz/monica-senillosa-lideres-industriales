import type { NextPage } from "next";

export type BenefitsItemsType = {
  className?: string;
  concientizarYPredisponerA?: string;
};

const BenefitsItems: NextPage<BenefitsItemsType> = ({
  className = "",
  concientizarYPredisponerA,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full text-left text-lg text-black font-helvetica-neue mq800:flex-wrap ${className}`}
    >
      <div className="h-[27px] w-[27px] rounded-11xl bg-aquamarine-100 flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
        <img
          className="w-[13px] h-2.5 relative"
          loading="lazy"
          alt=""
          src="/check.svg"
        />
      </div>
      <p className="m-0 h-[84px] flex-1 relative inline-block min-w-[367px] max-w-full mq800:min-w-full">
        {concientizarYPredisponerA}
      </p>
    </div>
  );
};

export default BenefitsItems;