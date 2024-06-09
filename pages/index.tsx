import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FrameComponent2 from "../components/frame-component2";
import Features from "../components/features";
import AboutUs from "../components/about-us";
import FrameComponent1 from "../components/frame-component1";
import Testimonies from "../components/testimonies";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Landing: NextPage = () => {
  return (
    <div className={styles.landing}>
      <main className={styles.frameParent}>
        <section className={styles.navbarParent}>
          <Navbar />
          <Hero />
        </section>
        <FrameComponent2 />
        <Features />
        <AboutUs />
        <FrameComponent1 />
        <Testimonies />
        <FrameComponent />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;
