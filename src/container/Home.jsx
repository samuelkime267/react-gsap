import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import {
  Navbar,
  About,
  Featured,
  Footer,
  Gallery,
  Header,
  CustomCursor,
} from "../components";
import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);
  useEffect(() => {
    if (document.readyState === "complete") {
      () => setPreloader(false);
    } else {
      window.addEventListener("load", () => setPreloader(false));
      return () =>
        document.removeEventListener("load", () => setPreloader(false));
    }
  }, []);

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="absolute loader-wrapper" data-scroll-container>
          <h1>flirty flowers</h1>
          <h1>rio de janeiro</h1>
        </div>
      ) : (
        <div id="main-container">
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
