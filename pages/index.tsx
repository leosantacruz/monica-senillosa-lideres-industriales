import type { NextPage } from "next";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Landing: NextPage = () => {
  return (
    <div className={styles.landing}>
      <main className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <FrameComponent11 />
          <FrameComponent9 />
        </section>
        <FrameComponent8 />
        <FrameComponent7 />
        <FrameComponent6 />
        <FrameComponent4 />
        <section className={styles.frameWrapper}>
          <div className={styles.parent}>
            <h1 className={styles.h1}>“</h1>
            <div className={styles.laFormaMsFcilDeAprenderWrapper}>
              <h1
                className={styles.laFormaMs}
              >{`La forma más fácil de aprender, desarrollarnos y lograr los resultados que queremos es jugando, `}</h1>
            </div>
            <h1 className={styles.h11}>”</h1>
          </div>
        </section>
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </main>
    </div>
  );
};

export default Landing;
