import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
  nIVEL1?: string;
  volunteerActivism?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  nIVEL1,
  volunteerActivism,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[32px] mq450:gap-[16px] ${className}`}
    >
      <button className="cursor-pointer [border:none] py-4 px-5 bg-aquamarine-100 self-stretch rounded-t-xl rounded-b-none flex flex-row items-center justify-center opacity-[0.6] whitespace-nowrap hover:bg-darkseagreen">
        <div className="relative text-lg tracking-[0.12em] leading-[23px] font-helvetica-neue text-black text-left inline-block min-w-[80px]">
          {nIVEL1}
        </div>
      </button>
      <div className="rounded-xl bg-aquamarine-200 flex flex-col items-center justify-start p-4">
        <img
          className="w-[35px] h-[34px] relative"
          loading="lazy"
          alt=""
          src={volunteerActivism}
        />
      </div>
    </div>
  );
};

export default FrameComponent4;