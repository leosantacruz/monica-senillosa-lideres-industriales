import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
  certificacinProfesionalCo?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  certificacinProfesionalCo,
}) => {
  return (
    <div className={[styles.checkParent, className].join(" ")}>
      <div className={styles.check}>
        <img className={styles.checkIcon} alt="" src="/check.svg" />
      </div>
      <b className={styles.certificacinProfesionalComp}>
        {certificacinProfesionalCo}
      </b>
    </div>
  );
};

export default FrameComponent3;
