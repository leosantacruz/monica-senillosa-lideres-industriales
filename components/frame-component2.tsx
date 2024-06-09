import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent4 from "./frame-component4";
import FrameComponent3 from "./frame-component3";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const onIntroductionContainerClick = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <section className={[styles.programContentParent, className].join(" ")}>
      <div className={styles.programContent}>
        <div className={styles.programDescriptionContentWrapper}>
          <div className={styles.programDescriptionContent}>
            <div className={styles.bookmarkStarParent}>
              <div className={styles.bookmarkStar}>
                <img
                  className={styles.emojiObjectsIcon}
                  loading="lazy"
                  alt=""
                  src="/emoji-objects.svg"
                />
              </div>
              <h1 className={styles.enQuConsiste}>
                ¿En qué consiste el PROGRAMA?
              </h1>
            </div>
            <div className={styles.esUnInnovadorContainer}>
              <p className={styles.esUnInnovador}>
                Es un innovador y eficaz PROCESO de DESARROLLO PROFESIONAL Y
                ALINEACION del LIDER (Jefe/ Supervisor) A LO QUE LE DEMANDA SU
                ACTUAL PUESTO DE TRABAJO O LE DEMANDARA EL QUE ASPIRA CONSEGUIR.
                 
              </p>
              <p className={styles.leFacilitaraCapacitarse}>
                LE FACILITARA CAPACITARSE DE MANERA INTEGRAL PARA QUE  PUEDA
                GESTIONAR PROCESOS Y PERSONAS DE MANERA REALMENTE SATISFACTORIA
                PARA  SI MISMO,  PARA SU LIDER, SU EQUIPO Y LA ORGANIZACIÓN EN
                LA QUE ACTUA O ACTUARA.
              </p>
              <p className={styles.consisteEnDiagnosticar}>
                Consiste en diagnosticar, comparar, comunicar, compartir e
                implementar varios recursos que le aportaremos, recibirá y lo
                fortalecerán (Ingenieria Industrial, Lean Manufacturing,
                Programación Neurolingüística -PNL-, Coaching, ) y sobre todo
                nuestro objetivo es que obtenga la experiencia, que ponga  en 
                práctica en la realidad cotidiana dichos recursos para que
                INTEGRE HABILIDADES BLANDAS y DURAS, SOFT SKILLS  Y  HARD
                SKILLS, TODAS LAS QUE NECESITE PARA LIDERAR PERSONAS Y PROCESOS
                EFICAZMENTE.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bxlFacebooksvgParent}>
          <div className={styles.bxlFacebooksvg}>
            <img
              className={styles.bxlFacebooksvgChild}
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
          </div>
          <div className={styles.bxlFacebooksvg1}>
            <img
              className={styles.bxlFacebooksvgItem}
              loading="lazy"
              alt=""
              src="/group-3.svg"
            />
          </div>
        </div>
      </div>
      <div
        className={styles.introduction}
        onClick={onIntroductionContainerClick}
      >
        <div className={styles.levelsContentParent}>
          <div className={styles.levelsContent}>
            <div className={styles.levelColumns}>
              <div className={styles.frameParent}>
                <FrameComponent4
                  nIVEL1="NIVEL 1"
                  volunteerActivism="/volunteer-activism.svg"
                />
                <div className={styles.frameGroup}>
                  <div className={styles.checkParent}>
                    <div className={styles.check}>
                      <img
                        className={styles.checkIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className={styles.liderazgo}>Liderazgo</b>
                  </div>
                  <div className={styles.checkGroup}>
                    <div className={styles.check1}>
                      <img
                        className={styles.checkIcon1}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className={styles.softSkills}>Soft skills</b>
                  </div>
                  <div className={styles.checkContainer}>
                    <div className={styles.check2}>
                      <img
                        className={styles.checkIcon2}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className={styles.manejoDeDocumentacionAdminiContainer}>
                      Ma
                      <span className={styles.nejoDeDocumentacionAdminist}>
                        NEJO DE DOCUMENTACION ADMINISTRATIVA QUE DEBE SABER
                        UTILIZAR
                      </span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.levelsContent1}>
            <div className={styles.levelsContentInner}>
              <div className={styles.frameContainer}>
                <FrameComponent4
                  nIVEL1="NIVEL 2"
                  volunteerActivism="/flare.svg"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.checkParent1}>
                    <div className={styles.check3}>
                      <img
                        className={styles.checkIcon3}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className={styles.nivel1}>NIVEL 1</b>
                  </div>
                  <div className={styles.checkParent2}>
                    <div className={styles.check4}>
                      <img
                        className={styles.checkIcon4}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <b className={styles.inteligenciaEmocionalY}>
                      Inteligencia emocional y Negociación
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.levelsContent2}>
            <div className={styles.levelsContentChild}>
              <div className={styles.frameParent1}>
                <FrameComponent4
                  nIVEL1="NIVEL 3"
                  volunteerActivism="/flare.svg"
                />
                <div className={styles.frameParent2}>
                  <FrameComponent3 certificacinProfesionalCo="Certificación profesional completa NIVEL 1 Y NIVEL 2" />
                  <FrameComponent3 certificacinProfesionalCo=" LEAN EN DOS MOLULOS (I MEJORA CONTINUA EN LOS PROCESOS, II AUTOCONTONTROL DE CALIDAD DE LOS PROCESOS)" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.enCualquieraDe}>
          En cualquiera de los casos sugerimos realizar una evaluación
          psicotécnica para identificar si la persona esta en condición de
          alinearse a la cultura de la organización lo que favorecera su
          permanencia en ella) 
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
