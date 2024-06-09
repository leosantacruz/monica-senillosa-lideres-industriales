import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  const onContactButtonsContainer1Click = useCallback(() => {
    // Please sync "metodologia" to the project
  }, []);

  return (
    <header className={[styles.navbar, className].join(" ")}>
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <div className={styles.menulinks}>
        <div className={styles.contactButtons}>
          <a className={styles.inicio}>Inicio</a>
        </div>
        <div
          className={styles.contactButtons1}
          onClick={onContactButtonsContainer1Click}
        >
          <a className={styles.cmoLoHacemos}>¿CÓMO LO HACEMOS?</a>
        </div>
        <div className={styles.contactButtons2}>
          <a className={styles.valor}>Valor</a>
        </div>
        <div className={styles.contactButtons3}>
          <a className={styles.sobreMi}>Sobre mi</a>
        </div>
        <button className={styles.contactbutton}>
          <a className={styles.contacto}>Contacto</a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
