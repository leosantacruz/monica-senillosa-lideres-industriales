import type { NextPage } from "next";
import styles from "./benefits-items.module.css";

export type BenefitsItemsType = {
  className?: string;
  concientizarYPredisponerA?: string;
};

const BenefitsItems: NextPage<BenefitsItemsType> = ({
  className = "",
  concientizarYPredisponerA,
}) => {
  return (
    <div className={[styles.benefitsItems, className].join(" ")}>
      <div className={styles.check}>
        <img
          className={styles.checkIcon}
          loading="lazy"
          alt=""
          src="/check.svg"
        />
      </div>
      <p className={styles.concientizarYPredisponer}>
        {concientizarYPredisponerA}
      </p>
    </div>
  );
};

export default BenefitsItems;
