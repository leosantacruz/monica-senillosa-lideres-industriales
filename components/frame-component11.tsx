import type { NextPage } from "next";
import styles from "./frame-component11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/home-app-logo.svg"
      />
      <div className={styles.menulinks}>
        <div className={styles.inicioWrapper}>
          <a className={styles.inicio}>Inicio</a>
        </div>
        <div className={styles.sobreMiWrapper}>
          <a className={styles.sobreMi}>Sobre mi</a>
        </div>
        <div className={styles.metodologaWrapper}>
          <a className={styles.metodologa}>Metodología</a>
        </div>
        <button className={styles.contactbutton}>
          <a className={styles.contacto}>Contacto</a>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent11;