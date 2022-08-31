import React from "react";
import { AboutOurGame, OurTeam, Roadmap } from "../../components/home";
import Hero from "../../components/home/hero";

const Home = () => {
  return (
    <div>
      <Hero />

      <div id="home-game">
        <AboutOurGame />
      </div>

      <div id="home-team">
        <OurTeam />
      </div>
      <div className="sectionTop" id="home-roadmap">
        <Roadmap />
      </div>
    </div>
  );
};

export default Home;
