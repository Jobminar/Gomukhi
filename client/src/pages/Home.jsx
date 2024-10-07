import React, { useMemo } from "react";
import CarouselComponent from "../components/Home/CarouselComponent";
import LatestProject from "../components/Home/LatestProject";
import SalientFeatures from "../components/Home/SalientFeatures";
import About from "../components/Home/About";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import HappyCustomers from "../components/Home/HappyCustomers";
import DreamHomeSection from "../components/Home/DreamHomeSection";
import "./Home.css";

// Wrapping components with React.memo for those that accept props but re-render with the same props often.
const MemoizedCarouselComponent = React.memo(CarouselComponent);
const MemoizedLatestProject = React.memo(LatestProject);
const MemoizedSalientFeatures = React.memo(SalientFeatures);
const MemoizedAbout = React.memo(About);
const MemoizedWhyChooseUs = React.memo(WhyChooseUs);
const MemoizedHappyCustomers = React.memo(HappyCustomers);
const MemoizedDreamHomeSection = React.memo(DreamHomeSection);

const Home = () => {
  // useMemo hook to store memoized version of components that do not take props.
  const carouselComponent = useMemo(() => <MemoizedCarouselComponent />, []);
  const latestProjectComponent = useMemo(() => <MemoizedLatestProject />, []);
  const salientFeaturesComponent = useMemo(
    () => <MemoizedSalientFeatures />,
    [],
  );
  const aboutComponent = useMemo(() => <MemoizedAbout />, []);
  const whyChooseUsComponent = useMemo(() => <MemoizedWhyChooseUs />, []);
  const happyCustomersComponent = useMemo(() => <MemoizedHappyCustomers />, []);
  const dreamHomeSectionComponent = useMemo(
    () => <MemoizedDreamHomeSection />,
    [],
  );

  return (
    <div className="home-page m-2">
      <section className="carousel-section">{carouselComponent}</section>
      <section className="latest-projects-section">
        {latestProjectComponent}
      </section>
      {/* <section className="salient-features-section">
        {salientFeaturesComponent}
      </section> */}
      <section className="about-section">{aboutComponent}</section>
      <section className="why-choose-us-section">
        {whyChooseUsComponent}
      </section>
      <section className="happy-customers-section">
        {happyCustomersComponent}
      </section>
      <section className="dream-home-section">
        {dreamHomeSectionComponent}
      </section>
    </div>
  );
};

export default Home;
