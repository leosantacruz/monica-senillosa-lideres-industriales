import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent9 from "../components/frame-component9";
import AboutUs from "../components/about-us";
import Features from "../components/features";
import FrameComponent2 from "../components/frame-component2";
import Testimonies from "../components/testimonies";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Landing: NextPage = () => {
  const onIntroductionClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <div className={styles.landing}>
      <main className={styles.frameParent}>
        <section className={styles.navbarParent}>
          <FrameComponent11 />
          <FrameComponent9 />
        </section>
        <section className={styles.introduction} onClick={onIntroductionClick}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-84.svg"
            />
            <div className={styles.frameContainer}>
              <div className={styles.evaluacinIntegralWrapper}>
                <h2 className={styles.evaluacinIntegral}>
                  Evaluación Integral
                </h2>
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
                    Optimización de la calidad, reducción de errores y
                    ausentismo, y aumento de la fidelización del personal.
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
        </section>
        <AboutUs />
        <Features />
        <FrameComponent2 />
        <Testimonies />
        <FrameComponent1 />
        <FrameComponent />
      </main>
    </div>
  );
};

export default Landing;