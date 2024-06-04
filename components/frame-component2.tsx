import type { NextPage } from "next";
import FrameComponent5 from "./frame-component5";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.aboutmonicaParent}>
        <div className={styles.aboutmonica}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <FrameComponent5
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
            <div className={styles.downloadParent}>
              <input className={styles.download} type="checkbox" />
              <div className={styles.descargarCv}>Descargar CV</div>
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

export default FrameComponent2;