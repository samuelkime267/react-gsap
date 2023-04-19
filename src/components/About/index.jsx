import React from "react";
import { SectionHeader } from "../";
import "./style.scss";

const About = () => {
  return (
    <>
      <section className={"about-section"} data-scroll-section>
        <SectionHeader title="about" />
        <p id="headline" data-scroll>
          Flirty Flowers is a blog about flowers and the floral designers who
          make them into art. Creativity and the art of ‘making’ require
          dialogue. The full purpose of the Flirty Flowers blog is to encourage
          and inspire. We value art, we value insight, and we value opinion.
          <div className="headline-bg"></div>
        </p>
      </section>
    </>
  );
};

export default About;
