import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
  certificacinProfesionalCo?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  certificacinProfesionalCo,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-2.5 px-0 gap-[4px] text-left text-base text-slategray font-helvetica ${className}`}
    >
      <div className="h-[27px] w-[27px] rounded-11xl flex flex-col items-center justify-center py-[8.5px] px-[7px] box-border">
        <img className="w-[13px] h-2.5 relative" alt="" src="/check.svg" />
      </div>
      <b className="flex-1 relative leading-[150%]">
        {certificacinProfesionalCo}
      </b>
    </div>
  );
};

export default FrameComponent3;