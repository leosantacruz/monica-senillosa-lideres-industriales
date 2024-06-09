import type { NextPage } from "next";
import styles from "./testimonial-rows.module.css";

export type TestimonialRowsType = {
  className?: string;
  group14?: string;
};

const TestimonialRows: NextPage<TestimonialRowsType> = ({
  className = "",
  group14,
}) => {
  return (
    <div className={[styles.testimonialRows, className].join(" ")}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={group14}
        />
        <div className={styles.testimonialContents}>
          <div className={styles.testimonialDetails}>
            <b className={styles.joeDoe}>Joe Doe</b>
            <div className={styles.testimonialRatings}>
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
              <img className={styles.kidStarIcon3} alt="" src="/kid-star.svg" />
              <img className={styles.kidStarIcon4} alt="" src="/kid-star.svg" />
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

export default TestimonialRows;
