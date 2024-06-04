import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
  personBook?: string;
  holaSoyMnica?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({
  className = "",
  personBook,
  holaSoyMnica,
}) => {
  return (
    <div className={[styles.bookmarkStarParent, className].join(" ")}>
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

export default FrameComponent5;
