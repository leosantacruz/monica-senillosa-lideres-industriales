import type { NextPage } from "next";
import styles from "./frame-component10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.kWrapper}>
        <div className={styles.k}>
          <span>99</span>
          <span className={styles.k1}>k</span>
        </div>
      </div>
      <b className={styles.empresasCertificadas}>
        <p className={styles.empresas}>{`EMPRESAS `}</p>
        <p className={styles.certificadas}>CERTIFICADAS</p>
      </b>
    </div>
  );
};

export default FrameComponent10;
