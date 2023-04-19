import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
// import SplitText from "../../utils/Split3.min";
import "./style.scss";

const Header = () => {
  useEffect(() => {
    // const split = new SplitText("#header-text", {
    //   type: "split",
    //   lineClass: "lineChildren",
    // });
    gsap.to(".lineChildren", {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);
  return (
    <>
      <section className="header-container" data-scroll-section>
        <ul className="header-menu">
          <li>intro</li>
          <li>about</li>
          <li>featured</li>
        </ul>
        <h1 id="header-text">
          <div className="lineParent">
            <div className="lineChildren">art</div>
          </div>{" "}
          <div className="lineParent">
            <div className="lineChildren">objects</div>
          </div>
        </h1>
      </section>
    </>
  );
};

export default Header;
