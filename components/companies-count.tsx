import type { NextPage } from "next";

export type CompaniesCountType = {
  className?: string;
};

const CompaniesCount: NextPage<CompaniesCountType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xl flex flex-col items-start justify-start gap-[4px] text-left text-41xl text-lightgreen font-helvetica-neue ${className}`}
    >
      <div className="self-stretch h-[53.5px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
        <div className="mt-[-14.2px] flex-1 relative leading-[82px] mq800:text-13xl mq800:leading-[61px] mq450:text-5xl mq450:leading-[46px]">
          <span>99</span>
          <span className="text-21xl">k</span>
        </div>
      </div>
      <b className="self-stretch relative text-base leading-[150%] font-bold font-inter text-darkslategray-100">
        <p className="m-0">{`EMPRESAS `}</p>
        <p className="m-0">CERTIFICADAS</p>
      </b>
    </div>
  );
};

export default CompaniesCount;