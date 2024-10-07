import React from "react";
import AboutHeader from "../components/About/AboutHeader";
import FounderMessage from "../components/About/FounderMessage";
import TeamSection from "../components/About/TeamSection";
import ValuesSection from "../components/About/ValueSection";

const About = () => {
  return (
    <div className="m-2 p-0">
      <AboutHeader />
      <FounderMessage />
      <TeamSection />
      <ValuesSection />
      {/* Add more sections if needed */}
    </div>
  );
};

export default About;
