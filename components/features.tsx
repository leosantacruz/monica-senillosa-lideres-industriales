import type { NextPage } from "next";
import { useCallback } from "react";
import BenefitItems from "./benefit-items";
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
      <div className={styles.featuresContent}>
        <div className={styles.featuresDescription}>
          <div className={styles.featuresTitleContentParent}>
            <div className={styles.featuresTitleContent}>
              <div className={styles.bookmarkStar}>
                <img
                  className={styles.bookmarkStarIcon}
                  loading="lazy"
                  alt=""
                  src="/bookmark-star.svg"
                />
              </div>
              <h1 className={styles.quEvitaEl}>¿Qué evita el Programa?</h1>
            </div>
            <div className={styles.entreOtrasCosasmltiples}>
              Entre otras cosas…(múltiples costos)
            </div>
          </div>
          <div className={styles.benefitsList}>
            <BenefitItems desvincularAAlguienYAfron="Desvincular a alguien y afrontar los costos que ello implica, antes de implementar las mejores prácticas posibles para que el Lider (Jefe/Supervisor) permanezca en la organización y lo haga en su mejor nivel de productividad y motivación." />
            <BenefitItems desvincularAAlguienYAfron="Pérdidas de tiempo y la subutilización o derroche de recursos, disminuye el ausentismo por desmotivación o somatización de personas de su equipo, errores de interpretación y de ejecución de los trabajos requeridos." />
            <BenefitItems desvincularAAlguienYAfron="Deterioro de las relaciones interpersonales que influyen directamente en la calidad de vida laboral. (Disminuye los malos entendidos, asperezas, frustraciones, enojos y resentimientos.) Inhibe el aumento del estrés y los estados emocionales negativos como la ira, angustia, impotencia, resentimiento, desconcentración, etc." />
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
            src="/workersmeetinginengineeringfactory20231127053341utc-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
