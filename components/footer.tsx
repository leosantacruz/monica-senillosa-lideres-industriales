import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeftParent}>
          <div className={styles.footerLeft}>
            <div className={styles.homeAppLogoParent}>
              <img
                className={styles.homeAppLogoIcon}
                loading="lazy"
                alt=""
                src="/home-app-logo.svg"
              />
              <div className={styles.socialIcons}>
                <div className={styles.socialLinks}>
                  <img
                    className={styles.facebookIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.linkedinIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.footerRight}>
              <div className={styles.lideresIndustrialesWrapper}>
                <div className={styles.lideresIndustriales}>
                  Lideres industriales
                </div>
              </div>
              <div className={styles.footerRightInner}>
                <img className={styles.frameChild} alt="" src="/group-89.svg" />
              </div>
            </div>
          </div>
          <div className={styles.footerMenu}>
            <div className={styles.menuItems}>
              <div className={styles.inicio}>Inicio</div>
            </div>
            <div className={styles.menuItems1}>
              <div className={styles.sobreMi}>Sobre mi</div>
            </div>
            <div className={styles.menuItems2}>
              <div className={styles.metodologa}>Metodología</div>
            </div>
            <div className={styles.menuItems3}>
              <div className={styles.contacto}>Contacto</div>
            </div>
          </div>
        </div>
        <img
          className={styles.footerDividerIcon}
          alt=""
          src="/footer-divider.svg"
        />
      </div>
      <p className={styles.copyrightLideresIndustriales}>
        ©Copyright Lideres Industriales. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
