import type { NextPage } from "next";
import { useCallback } from "react";
import BenefitsItems from "./benefits-items";
import styles from "./about-us.module.css";

export type AboutUsType = {
  className?: string;
};

const AboutUs: NextPage<AboutUsType> = ({ className = "" }) => {
  const onBenefitsButtonClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section className={[styles.aboutUs, className].join(" ")}>
      <div className={styles.aboutUsContent}>
        <div className={styles.workersMeetingInEngineeringWrapper}>
          <img
            className={styles.workersMeetingInEngineeringIcon}
            loading="lazy"
            alt=""
            src="/workersmeetinginengineeringfactory20231127053341utc-1-1@2x.png"
          />
        </div>
        <div className={styles.benefitsImage}>
          <div className={styles.benefitsDescriptionParent}>
            <div className={styles.benefitsDescription}>
              <div className={styles.bookmarkStar}>
                <img
                  className={styles.book2Icon}
                  loading="lazy"
                  alt=""
                  src="/book-2.svg"
                />
              </div>
              <h1 className={styles.paraQuSirve}>
                ¿Para qué sirve definitivamente?
              </h1>
            </div>
            <div className={styles.sirveParaIncrementar}>
              Sirve para incrementar la rentabilidad de la empresa a  través
              de: 
            </div>
          </div>
          <div className={styles.benefitsList}>
            <div className={styles.benefitsItems}>
              <div className={styles.check}>
                <img
                  className={styles.checkIcon}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <p className={styles.optimizarLaCalidad}>
                Optimizar la calidad de los procesos y de los resultados a su
                cargo.
              </p>
            </div>
            <div className={styles.benefitsItems1}>
              <div className={styles.check1}>
                <img
                  className={styles.checkIcon1}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.reducirElAusentismo}>
                Reducir el ausentismo en su área.
              </div>
            </div>
            <div className={styles.benefitsItems2}>
              <div className={styles.check2}>
                <img
                  className={styles.checkIcon2}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.estimularLaPredisposicin}>
                Estimular la predisposición a la Mejora Continua
              </div>
            </div>
            <div className={styles.benefitsItems3}>
              <div className={styles.check3}>
                <img className={styles.checkIcon3} alt="" src="/check.svg" />
              </div>
              <div className={styles.fidelizarAlPersonal}>
                Fidelizar al personal y prevenir la rotación.
              </div>
            </div>
            <div className={styles.benefitsItems4}>
              <div className={styles.check4}>
                <img className={styles.checkIcon4} alt="" src="/check.svg" />
              </div>
              <div className={styles.evitarPotencialesDemandas}>
                Evitar potenciales demandas laborales ante desvinculaciones
              </div>
            </div>
            <div className={styles.benefitsItems5}>
              <div className={styles.check5}>
                <img className={styles.checkIcon5} alt="" src="/check.svg" />
              </div>
              <p className={styles.prevenirQueEmpleados}>
                Prevenir que empleados trabajen desmotivados o renuncien por
                mala relación con su líder (Jefe/supervisor) 
              </p>
            </div>
            <div className={styles.benefitsItems6}>
              <div className={styles.check6}>
                <img
                  className={styles.checkIcon6}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <p className={styles.contarConLderes}>
                Contar con Líderes que apoyen al desarrollo de su personal en
                forma permanente
              </p>
            </div>
            <BenefitsItems concientizarYPredisponerA="Concientizar y predisponer a los lideres a generar y desarrollar segundas líneas calificadas (para que el equipo no sufra acefalia en los periodos en que el mismo requiera ausentarse, o delegar para ascender a otra posicion)" />
            <BenefitsItems concientizarYPredisponerA="Garantizar que la persona experimente una vinculación natural, efectiva y satisfactoria con las responsabilidades y tareas de su posición de Líder /jefe/supervisor) y las demás relaciones que debe establecer con las demás personas y el entorno de trabajo. " />
            <BenefitsItems concientizarYPredisponerA="Facilitar que sepa desaprender practica y hábitos que no resulta útiles para que pueda desarrollar nuevas actitudes y motivaciones complementarias a las que tiene, que le resultaran beneficiosas para mejorar su performance." />
          </div>
          <button
            className={styles.benefitsButton}
            onClick={onBenefitsButtonClick}
          >
            <div className={styles.saberMs}>Saber más</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
