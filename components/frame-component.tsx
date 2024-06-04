import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <footer className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.homeAppLogoParent}>
              <img
                className={styles.homeAppLogoIcon}
                loading="lazy"
                alt=""
                src="/home-app-logo-1.svg"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.lideresIndustrialesWrapper}>
                <div className={styles.lideresIndustriales}>
                  Lideres industriales
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <img className={styles.frameChild} alt="" src="/group-89.svg" />
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.inicioWrapper}>
              <div className={styles.inicio}>Inicio</div>
            </div>
            <div className={styles.sobreMiWrapper}>
              <div className={styles.sobreMi}>Sobre mi</div>
            </div>
            <div className={styles.metodologaWrapper}>
              <div className={styles.metodologa}>Metodología</div>
            </div>
            <div className={styles.contactoWrapper}>
              <div className={styles.contacto}>Contacto</div>
            </div>
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="/vector-15.svg" />
      </div>
      <div className={styles.copyrightLideresIndustriales}>
        ©Copyright Lideres Industriales. Todos los derechos reservados
      </div>
    </footer>
  );
};

export default FrameComponent;
