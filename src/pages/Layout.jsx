import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import {
  BackArrowButton,
  ForwardArrowButton,
} from "../components/SideButtons.jsx";
import Header from "../components/Header.jsx";
import HomePage from "./HomePage.jsx";
import ImageRadioGroup from "../components/ImageRadioGroup.jsx";
import ServicesPage from "./ServicesPage.jsx";
import ContactPage from "./ContactPage.jsx";
import AboutPage from "./AboutPage.jsx";
import Footer from "../components/Footer.jsx";
import backImage1 from "../img/background/backImage1.jpg";
import backImage2 from "../img/background/backImage2.jpg";
import backImage3 from "../img/background/backImage3.jpg";
import backImage4 from "../img/background/backImage4.jpg";
import backImage5 from "../img/background/backImage5.jpg";
import { BackGroundLight } from "../components/CalculateAnimations";

const Layout = () => {
  const [backgroundNo, setBackgroundNo] = useState("0");
  const [, setCurrentBackground] = useState(backImage1);
  const prevBackgroungRef = useRef("-1");

  const backgrounds = [
    backImage1,
    backImage2,
    backImage3,
    backImage4,
    backImage5,
  ];
  // console.log(`current bg: ${currentBackground}`);

  useEffect(() => {
    prevBackgroungRef.current = backgroundNo;
  }, [backgroundNo]);

  //console.log(`last bgno: ${prevBackgroungRef.current}`);

  function setBg(stringNum) {
    setBackgroundNo(stringNum); // for radio group
    setCurrentBackground(backgrounds[parseInt(stringNum)]); //for the background image
  }
  // for navigation
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const BackgroundImage = ({ image, index }) => {
    function filterClasses(index) {
      // if it is the current background
      if (index.toString() === backgroundNo) {
        if (parseInt(prevBackgroungRef.current) === -1) {
          return "showBackground";
        }
        if (index < parseInt(prevBackgroungRef.current)) {
          return "showBackground slideInFromLeftClass";
        } else {
          return "showBackground slideInFromRightClass ";
        }
      }
      //if it is the last background
      if (index === parseInt(prevBackgroungRef.current)) {
        if (index > parseInt(backgroundNo)) {
          return "showBackground slideOutRightClass";
        } else {
          return "showBackground slideOutLeftClass";
        }
      }
      return "hideBackground";
    }

    return (
      <Box
        className={filterClasses(index)}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundColor: "grey",
          backgroundBlendMode: "multiply",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition:
            index === 0
              ? "left 0% bottom 80%"
              : index === 2
              ? "left 0% bottom 77%"
              : "left 0% bottom 70%",
        }}></Box>
    );
  };
  return (
    <>
      <Box bgcolor={"rgb(9,27,40)"}>
        <Box display="static">
          <BackArrowButton setBg={setBg} bgNo={backgroundNo} />
          <ForwardArrowButton setBg={setBg} bgNo={backgroundNo} />
          <ImageRadioGroup bgNo={backgroundNo} setBg={setBg} />
          {backgrounds.map((key, value) => {
            return <BackgroundImage key={key} image={key} index={value} />;
          })}
        </Box>
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            px: { xs: "0%", md: "10%" },
            color: "white",
          }}>
          <header ref={homeRef}>
            <Header
              homeRef={homeRef}
              servicesRef={servicesRef}
              contactRef={contactRef}
              aboutRef={aboutRef}
            />
          </header>
          <main>
            <HomePage servicesRef={servicesRef} />
          </main>
        </Box>
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            return <BackGroundLight index={i} key={i} />;
          })}
          <section ref={servicesRef}>
            <ServicesPage />
          </section>
          <section ref={contactRef}>
            <ContactPage />
          </section>
        </Box>
        <section
          ref={aboutRef}
          style={{
            backgroundColor: "rgb(245, 243, 240)",
            position: "relative",
          }}>
          <AboutPage />
        </section>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
