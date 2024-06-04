import type { NextPage } from "next";
import FrameComponent10 from "./frame-component10";
import styles from "./frame-component9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.certificacinDeLderesIndusParent}>
        <h1 className={styles.certificacinDeLderes}>
          Certificación de Líderes Industriales
        </h1>
        <div className={styles.nuestroProgramaAyuda}>
          Nuestro programa ayuda a líderes a alcanzar su potencial y alinear sus
          habilidades con las necesidades de la organización. Ideal para equipos
          que necesitan mejorar en gestión eficiente.
        </div>
        <button className={styles.contactoWrapper}>
          <div className={styles.contacto}>Contacto</div>
        </button>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.portraitOfCompanyLeadersAnParent}>
              <img
                className={styles.portraitOfCompanyLeadersAnIcon}
                loading="lazy"
                alt=""
                src="/portraitofcompanyleadersandtheiremployeesin20231127050633utc-1@2x.png"
              />
              <div className={styles.frameDiv}>
                <div className={styles.productividadWrapper}>
                  <b className={styles.productividad}>PRODUCTIVIDAD</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.rentabilidadWrapper}>
              <b className={styles.rentabilidad}>RENTABILIDAD</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameWrapper4}>
              <div className={styles.rentabilidadContainer}>
                <b className={styles.rentabilidad1}>RENTABILIDAD</b>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.parent}>
              <div className={styles.div}>
                <span>30</span>
                <span className={styles.span}>%</span>
              </div>
              <b className={styles.empresasCertificadas}>
                <p className={styles.empresas}>{`EMPRESAS `}</p>
                <p className={styles.certificadas}>CERTIFICADAS</p>
              </b>
            </div>
            <FrameComponent10 />
            <FrameComponent10 />
          </div>
          <div className={styles.frameWrapper5}>
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
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
