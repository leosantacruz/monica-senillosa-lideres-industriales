import type { NextPage } from "next";
import CompaniesCount from "./companies-count";
import styles from "./hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
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
      <div className={styles.benefitsContentWrapper}>
        <div className={styles.benefitsContent}>
          <div className={styles.benefitColumns}>
            <div className={styles.portraitOfCompanyLeadersAnParent}>
              <img
                className={styles.portraitOfCompanyLeadersAnIcon}
                loading="lazy"
                alt=""
                src="/portraitofcompanyleadersandtheiremployeesin20231127050633utc-1@2x.png"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.productividadWrapper}>
                  <b className={styles.productividad}>PRODUCTIVIDAD</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.benefitsContentInner}>
            <div className={styles.rentabilidadWrapper}>
              <b className={styles.rentabilidad}>RENTABILIDAD</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.rentabilidadContainer}>
                <b className={styles.rentabilidad1}>RENTABILIDAD</b>
              </div>
            </div>
          </div>
          <div className={styles.certifiedCompanies}>
            <div className={styles.certifiedDescription}>
              <div className={styles.placeholder}>
                <span>30</span>
                <span className={styles.span}>%</span>
              </div>
              <b className={styles.empresasCertificadas}>
                <p className={styles.empresas}>{`EMPRESAS `}</p>
                <p className={styles.certificadas}>CERTIFICADAS</p>
              </b>
            </div>
            <CompaniesCount />
            <CompaniesCount />
          </div>
          <div className={styles.frameWrapper1}>
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

export default Hero;
