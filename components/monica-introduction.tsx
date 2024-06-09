import type { NextPage } from "next";
import styles from "./monica-introduction.module.css";

export type MonicaIntroductionType = {
  className?: string;
  personBook?: string;
  holaSoyMnica?: string;
};

const MonicaIntroduction: NextPage<MonicaIntroductionType> = ({
  className = "",
  personBook,
  holaSoyMnica,
}) => {
  return (
    <div className={[styles.monicaIntroduction, className].join(" ")}>
      <div className={styles.bookmarkStar}>
        <img
          className={styles.personBookIcon}
          loading="lazy"
          alt=""
          src={personBook}
        />
      </div>
      <h1 className={styles.holaSoyMnica}>{holaSoyMnica}</h1>
    </div>
  );
};

export default MonicaIntroduction;
