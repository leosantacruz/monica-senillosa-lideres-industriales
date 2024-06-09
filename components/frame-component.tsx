import type { NextPage } from "next";
import MonicaIntroduction from "./monica-introduction";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.contactContentWrapper, className].join(" ")}>
      <div className={styles.contactContent}>
        <div className={styles.contactDetails}>
          <p className={styles.estamosAquPara}>
            Estamos aquí para ayudarle a transformar el liderazgo en su
            organización.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactIcons}>
              <img
                className={styles.infoIcons}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className={styles.contactLinks}> +54 123 456 789</div>
            </div>
            <div className={styles.contactIcons1}>
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
        <div className={styles.formContainerWrapper}>
          <form className={styles.formContainer}>
            <div className={styles.formFields}>
              <MonicaIntroduction
                personBook="/headset-mic.svg"
                holaSoyMnica="Hablemos"
              />
              <div
                className={styles.siDeseaMs}
              >{`Si desea más información sobre nuestro programa o tiene alguna pregunta, no dude en ponerse en contacto con nosotros. `}</div>
              <div className={styles.formInputFields}>
                <div className={styles.inputLabels}>
                  <div className={styles.nombre}>Nombre</div>
                  <input className={styles.inputBoxes} type="text" />
                </div>
                <div className={styles.inputLabels1}>
                  <div className={styles.empresa}>Empresa</div>
                  <input className={styles.inputLabelsChild} type="text" />
                </div>
                <div className={styles.inputLabels2}>
                  <div className={styles.eMail}>E-mail</div>
                  <input className={styles.inputLabelsItem} type="text" />
                </div>
                <div className={styles.inputLabels3}>
                  <div className={styles.telfono}>Teléfono</div>
                  <input className={styles.inputLabelsInner} type="text" />
                </div>
                <div className={styles.inputLabels4}>
                  <div className={styles.mensaje}>Mensaje</div>
                  <input className={styles.frameInput} type="text" />
                </div>
              </div>
            </div>
            <button className={styles.submitButton}>
              <div className={styles.enviar}>Enviar</div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
