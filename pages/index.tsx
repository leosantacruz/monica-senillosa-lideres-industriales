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

const Landing: NextPage = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border gap-[120px] max-w-full mq800:gap-[60px] mq450:gap-[30px]">
        <section className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
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