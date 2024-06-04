import type { NextPage } from "next";
import FrameComponent5 from "./frame-component5";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.estamosAquParaAyudarleATParent}>
          <p className={styles.estamosAquPara}>
            Estamos aquí para ayudarle a transformar el liderazgo en su
            organización.
          </p>
          <div className={styles.frameGroup}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className={styles.div}> +54 123 456 789</div>
            </div>
            <div className={styles.mailParent}>
              <img
                className={styles.mailIcon}
                loading="lazy"
                alt=""
                src="/mail.svg"
              />
              <h2 className={styles.infolideresindustrialescom}>
                 info@lideresindustriales.com
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <form className={styles.frameForm}>
            <div className={styles.frameDiv}>
              <FrameComponent5
                personBook="/headset-mic.svg"
                holaSoyMnica="Hablemos"
              />
              <div
                className={styles.siDeseaMs}
              >{`Si desea más información sobre nuestro programa o tiene alguna pregunta, no dude en ponerse en contacto con nosotros. `}</div>
              <div className={styles.frameParent1}>
                <div className={styles.nombreParent}>
                  <div className={styles.nombre}>Nombre</div>
                  <input className={styles.frameChild} type="text" />
                </div>
                <div className={styles.empresaParent}>
                  <div className={styles.empresa}>Empresa</div>
                  <input className={styles.frameItem} type="text" />
                </div>
                <div className={styles.eMailParent}>
                  <div className={styles.eMail}>E-mail</div>
                  <input className={styles.frameInner} type="text" />
                </div>
                <div className={styles.telfonoParent}>
                  <div className={styles.telfono}>Teléfono</div>
                  <input className={styles.frameInput} type="text" />
                </div>
                <div className={styles.mensajeParent}>
                  <div className={styles.mensaje}>Mensaje</div>
                  <input className={styles.frameChild1} type="text" />
                </div>
              </div>
            </div>
            <button className={styles.enviarWrapper}>
              <div className={styles.enviar}>Enviar</div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
