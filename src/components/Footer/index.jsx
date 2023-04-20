import React, { useRef, useState, useEffect } from "react";
import { SectionHeader } from "../";
import { useOnScreenEl } from "../../hooks";
import { gsap } from "gsap";
import "./style.scss";

const Footer = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreenEl(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      gsap.set(".lineChildren", { autoAlpha: 1 });
      gsap.fromTo(
        ".lineChildren",
        { y: 200, opacity: 0 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);
  return (
    <>
      <section className="footer" data-scroll-section ref={ref}>
        <SectionHeader title="Made in" />

        <h1 className={"location"} id="location-text">
          <div className="lineParent">
            <div className="lineChildren footer-h1">Rio de</div>
          </div>{" "}
          <div className="lineParent">
            <div className="lineChildren footer-h1">Janeiro</div>
          </div>
        </h1>
      </section>
    </>
  );
};

export default Footer;
