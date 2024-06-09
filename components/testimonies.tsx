import type { NextPage } from "next";
import TestimonialRows from "./testimonial-rows";
import styles from "./testimonies.module.css";

export type TestimoniesType = {
  className?: string;
};

const Testimonies: NextPage<TestimoniesType> = ({ className = "" }) => {
  return (
    <section className={[styles.testimonies, className].join(" ")}>
      <div className={styles.testimonialsContent}>
        <div className={styles.testimonialsHeader}>
          <h1 className={styles.loQueDicen}>
             Lo Que Dicen Nuestros Participantes
          </h1>
        </div>
        <div className={styles.nuestrosParticipantesHan}>
          Nuestros participantes han experimentado cambios significativos en su
          forma de liderar y en los resultados de sus equipos. Aquí algunos
          testimonios:
        </div>
      </div>
      <div className={styles.testimonialCards}>
        <TestimonialRows group14="/group-14@2x.png" />
        <TestimonialRows group14="/group-16@2x.png" />
        <TestimonialRows group14="/group-15@2x.png" />
      </div>
    </section>
  );
};

export default Testimonies;
