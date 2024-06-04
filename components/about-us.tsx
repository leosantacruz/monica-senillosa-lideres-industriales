import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./about-us.module.css";

export type AboutUsType = {
  className?: string;
};

const AboutUs: NextPage<AboutUsType> = ({ className = "" }) => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section className={[styles.aboutUs, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.workersMeetingInEngineeringWrapper}>
          <img
            className={styles.workersMeetingInEngineeringIcon}
            loading="lazy"
            alt=""
            src="/workersmeetinginengineeringfactory20231127053341utc-1@2x.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.bookmarkStarParent}>
              <div className={styles.bookmarkStar}>
                <img
                  className={styles.book2Icon}
                  loading="lazy"
                  alt=""
                  src="/book-2.svg"
                />
              </div>
              <h1 className={styles.enQuConsisteContainer}>
                <p className={styles.enQuConsiste}>¿En qué consiste</p>
                <p className={styles.nuestroPrograma}>nuestro programa?</p>
              </h1>
            </div>
            <div className={styles.nuestroInnovadorProceso}>
              Nuestro innovador proceso de desarrollo profesional alinea a los
              líderes con las demandas de sus puestos actuales o futuros.
              Ofrecemos capacitación en Ingeniería Industrial, Lean
              Manufacturing, Programación Neurolingüística (PNL) y Coaching.
              Buscamos que los participantes integren habilidades blandas y
              duras para liderar personas y procesos eficazmente.
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.checkParent}>
              <div className={styles.check}>
                <img
                  className={styles.checkIcon}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.diagnsticoYAutoevaluacin}>
                Diagnóstico y autoevaluación de competencias
              </div>
            </div>
            <div className={styles.checkGroup}>
              <div className={styles.check1}>
                <img className={styles.checkIcon1} alt="" src="/check.svg" />
              </div>
              <div className={styles.evaluacin360Opcional}>
                Evaluación 360 (opcional)
              </div>
            </div>
            <div className={styles.checkContainer}>
              <div className={styles.check2}>
                <img className={styles.checkIcon2} alt="" src="/check.svg" />
              </div>
              <div className={styles.diseoPersonalizadoDel}>
                Diseño personalizado del programa
              </div>
            </div>
            <div className={styles.checkParent1}>
              <div className={styles.check3}>
                <img className={styles.checkIcon3} alt="" src="/check.svg" />
              </div>
              <div className={styles.evaluacionesContinuasY}>
                Evaluaciones continuas y presupuesto
              </div>
            </div>
            <div className={styles.checkParent2}>
              <div className={styles.check4}>
                <img className={styles.checkIcon4} alt="" src="/check.svg" />
              </div>
              <div className={styles.desarrolloDeDinmicas}>
                Desarrollo de dinámicas formativas
              </div>
            </div>
            <div className={styles.checkParent3}>
              <div className={styles.check5}>
                <img className={styles.checkIcon5} alt="" src="/check.svg" />
              </div>
              <div className={styles.evaluacinFinalY}>
                Evaluación final y certificación
              </div>
            </div>
          </div>
          <button
            className={styles.saberMsWrapper}
            onClick={onFrameButtonClick}
          >
            <div className={styles.saberMs}>Saber más</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
