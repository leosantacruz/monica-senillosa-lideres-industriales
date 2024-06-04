import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
  group14?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  group14,
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={group14}
        />
        <div className={styles.frameGroup}>
          <div className={styles.joeDoeParent}>
            <b className={styles.joeDoe}>Joe Doe</b>
            <div className={styles.kidStarParent}>
              <img
                className={styles.kidStarIcon}
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className={styles.kidStarIcon1}
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className={styles.kidStarIcon2}
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className={styles.kidStarIcon3}
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
              <img
                className={styles.kidStarIcon4}
                loading="lazy"
                alt=""
                src="/kid-star.svg"
              />
            </div>
          </div>
          <div className={styles.elProgramaDe}>
            El programa de liderazgo ha sido transformador para nuestra empresa.
            Hemos visto una mejora notable en la cohesión del equipo y en la
            eficiencia de nuestros procesos."_ – Juan Pérez, Gerente de
            Producción
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
