import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./features.module.css";

export type FeaturesType = {
  className?: string;
};

const Features: NextPage<FeaturesType> = ({ className = "" }) => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section className={[styles.features, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.bookmarkStarParent}>
              <div className={styles.bookmarkStar}>
                <img
                  className={styles.bookmarkStarIcon}
                  loading="lazy"
                  alt=""
                  src="/bookmark-star.svg"
                />
              </div>
              <h1 className={styles.beneficiosYSoluciones}>
                Beneficios y Soluciones
              </h1>
            </div>
            <div className={styles.nuestroProgramaIncrementa}>
              Nuestro programa incrementa la rentabilidad de su empresa a través
              de la optimización de procesos y resultados. Aquí algunos de los
              beneficios que podrá obtener:
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
              <div className={styles.elevacinDelNivel}>
                Elevación del nivel de profesionalismo del líder
              </div>
            </div>
            <div className={styles.checkGroup}>
              <div className={styles.check1}>
                <img
                  className={styles.checkIcon1}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.optimizacinDeLa}>
                Optimización de la calidad de los procesos
              </div>
            </div>
            <div className={styles.checkContainer}>
              <div className={styles.check2}>
                <img
                  className={styles.checkIcon2}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.reduccinDeErrores}>
                Reducción de errores y ausentismo
              </div>
            </div>
            <div className={styles.checkParent1}>
              <div className={styles.check3}>
                <img
                  className={styles.checkIcon3}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.fidelizacinDelPersonal}>
                Fidelización del personal
              </div>
            </div>
            <div className={styles.checkParent2}>
              <div className={styles.check4}>
                <img
                  className={styles.checkIcon4}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.prevencinDeDemandas}>
                Prevención de demandas laborale
              </div>
            </div>
            <div className={styles.checkParent3}>
              <div className={styles.check5}>
                <img
                  className={styles.checkIcon5}
                  loading="lazy"
                  alt=""
                  src="/check.svg"
                />
              </div>
              <div className={styles.desarrolloDeSegundas}>
                Desarrollo de segundas líneas de liderazgo
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
        <div className={styles.workersMeetingInEngineeringWrapper}>
          <img
            className={styles.workersMeetingInEngineeringIcon}
            loading="lazy"
            alt=""
            src="/workersmeetinginengineeringfactory20231127053341utc-1-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
