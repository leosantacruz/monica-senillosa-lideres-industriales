import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

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
    <div className={[styles.frameParent, className].join(" ")}>
      <button className={styles.nivel1Wrapper}>
        <div className={styles.nivel1}>{nIVEL1}</div>
      </button>
      <div className={styles.volunteerActivism}>
        <img
          className={styles.volunteerActivismIcon}
          loading="lazy"
          alt=""
          src={volunteerActivism}
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
