import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent} onClick={onFrameContainerClick}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-84.svg"
          />
          <div className={styles.frameContainer}>
            <div className={styles.evaluacinIntegralWrapper}>
              <h2 className={styles.evaluacinIntegral}>Evaluación Integral</h2>
            </div>
            <div className={styles.diagnsticoYAutoevaluacinDWrapper}>
              <div className={styles.diagnsticoYAutoevaluacinDContainer}>
                <p className={styles.diagnsticoYAutoevaluacin}>
                  <b>Diagnóstico y Autoevaluación</b>
                </p>
                <p className={styles.descubraLasCompetencias}>
                  Descubra las competencias y áreas de mejora de sus líderes a
                  través de evaluaciones personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/group-86.svg"
          />
          <div className={styles.frameParent1}>
            <div className={styles.resultadosTangiblesWrapper}>
              <h2 className={styles.resultadosTangibles}>
                Resultados Tangibles
              </h2>
            </div>
            <div className={styles.mejoraDeProcesosOptimizaciWrapper}>
              <div className={styles.mejoraDeProcesosOptimizaciContainer}>
                <p className={styles.mejoraDeProcesos}>
                  <b>Mejora de Procesos</b>
                </p>
                <p className={styles.optimizacinDeLa}>
                  Optimización de la calidad, reducción de errores y ausentismo,
                  y aumento de la fidelización del personal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-85.svg"
          />
          <div className={styles.frameParent3}>
            <div className={styles.capacitacinEspecializadaWrapper}>
              <h2 className={styles.capacitacinEspecializada}>
                Capacitación Especializada
              </h2>
            </div>
            <div className={styles.desarrolloDeHabilidadesCapaWrapper}>
              <div className={styles.desarrolloDeHabilidadesCapaContainer}>
                <p className={styles.desarrolloDeHabilidades}>
                  <b>Desarrollo de Habilidades</b>
                </p>
                <p className={styles.capacitacinEnHabilidades}>
                  Capacitación en habilidades blandas y duras, incluyendo Lean
                  Manufacturing y PNL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
