import type { NextPage } from "next";
import MonicaIntroduction from "./monica-introduction";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.aboutMonicaContentWrapper, className].join(" ")}
    >
      <div className={styles.aboutMonicaContent}>
        <div className={styles.aboutmonica}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.aboutMonicaActions}>
            <div className={styles.monicaDescription}>
              <MonicaIntroduction
                personBook="/person-book.svg"
                holaSoyMnica="Hola, soy Mónica"
              />
              <div className={styles.fundadoraDeAqesiMasterContainer}>
                <p className={styles.fundadoraDeAqesiMaster}>
                  Fundadora de aQesi!  Master Practitioner y Trainer Certificado
                  en Programación Neurolinguistica Trabajo con PNL y otros
                  tantos recursos útiles, desde hace más de veinte años, en el
                  complejo y apasionante ámbito de las relaciones
                  interpersonales de negocios. Asesoro y facilito su desarrollo
                  profesional a líderes de Pymes industriales y de una variedad
                  de empresas de servicios (financieras, aseguradoras, de
                  ingeniería y tecnología, publicidad, salud, espectáculos, etc.
                  ) y a profesionales independientes y emprendedores en la
                  gestión de sus negocios. ¡Creo que la forma más fácil de
                  aprender, desarrollarnos y lograr los resultados que queremos
                  es jugando, seria y creativamente, diseñando estrategias,
                  poniendo el cuerpo en ello, “haciendo y haciendo” y
                  disfrutando el proceso! y así es como trabajo con mis
                  clientes! ¡¡Vivo en Argentina y de hacer lo que me gusta!!
                </p>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <input className={styles.download} type="checkbox" />
              <div className={styles.descargarCv}>Descargar CV</div>
            </div>
            <div className={styles.actionButtons1}>
              <input className={styles.download1} type="checkbox" />
              <div className={styles.menosTextoLink}>
                menos texto link a lineknd
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sloganWrapper}>
          <div className={styles.slogan}>
            <h1 className={styles.h1}>“</h1>
            <div className={styles.laFormaMsFcilDeAprenderWrapper}>
              <h1
                className={styles.laFormaMs}
              >{`La forma más fácil de aprender, desarrollarnos y lograr los resultados que queremos es jugando, `}</h1>
            </div>
            <h1 className={styles.h11}>”</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
