import type { NextPage } from "next";
import styles from "./benefit-items.module.css";

export type BenefitItemsType = {
  className?: string;
  desvincularAAlguienYAfron?: string;
};

const BenefitItems: NextPage<BenefitItemsType> = ({
  className = "",
  desvincularAAlguienYAfron,
}) => {
  return (
    <div className={[styles.benefitItems, className].join(" ")}>
      <div className={styles.check}>
        <img
          className={styles.checkIcon}
          loading="lazy"
          alt=""
          src="/check.svg"
        />
      </div>
      <div className={styles.desvincularAAlguien}>
        {desvincularAAlguienYAfron}
      </div>
    </div>
  );
};

export default BenefitItems;
