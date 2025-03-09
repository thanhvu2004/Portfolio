import { Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaArrowUp } from "react-icons/fa";
import Pointer from "./component/Pointer";
import Card from "./component/Card";
import Scrolldown from "./component/ScrollDown";
import Projects from "./component/Projects";
import AnimatedSVG from "./component/AnimatedWave";
import vnFlag from "./assets/vn.png";
import caFlag from "./assets/ca.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Buttons.css";
import "./css/App.css";
import "./css/colors.css";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [rotate, setRotate] = useState(-3);
  const [showFirstName, setShowFirstName] = useState(true);
  const [showToTopButton, setShowToTopButton] = useState(false);
  const title = "LEARNER / DEVELOPER / DESIGNER";

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstName((prevShowFirstName) => !prevShowFirstName);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTap = () => {
    setRotate((prevRotate) => (prevRotate === -3 ? 3 : -3));
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    setIsDarkMode(currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const homeSectionHeight = homeSection.offsetHeight;
      const scrollPosition = window.scrollY;

      setShowToTopButton(scrollPosition > homeSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App" style={{ contain: "layout" }}>
      <section id="home">
        <div className="container">
          <div className="logo-container">
            <motion.svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 65.67 52.05"
              style={img}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
            >
              <defs>
                <style>
                  {`
                    .cls-1 {
                      fill: none;
                    }
                    .cls-1, .cls-2 {
                      stroke: var(--stroke-color);
                      stroke-miterlimit: 10;
                    }
                    .cls-3 {
                      stroke-width: 0px;
                    }
                    .cls-3, .cls-2 {
                      fill: var(--fill-color);
                    }
                  `}
                </style>
              </defs>
              <g id="Layer_2-2" data-name="Layer 2">
                <g>
                  <path
                    className="cls-2"
                    d="M1.83,50.2L26.56,13.01c1.47-2.21,3.24-4.2,5.26-5.92,10.41-9.58,21.29-8.01,23.9.14,0,0-8.4-8.13-20.14,9.94C23.83,35.24,1.83,50.2,1.83,50.2Z"
                  />
                  <path
                    className="cls-2"
                    d="M44.61,22.17h0v28.94c-4.12,0-7.45-3.34-7.45-7.45,0,0,0-14.03,0-14.03,0-4.12,3.34-7.45,7.45-7.45Z"
                  />
                  <path
                    className="cls-2"
                    d="M59.41,51.11v-28.94c-4.09,0-7.4,3.31-7.4,7.4,0,0,0,21.53,0,21.53h7.4Z"
                  />
                  <path
                    className="cls-2"
                    d="M59.41,22.17h6.19c-6.19.1-6.19,6.1-6.19,6.1"
                  />
                  <path className="cls-1" d="M44.61,51.11s7.57-.15,7.57-7.57" />
                  <path
                    className="cls-2"
                    d="M18.19,43.14h11.24c2.31,0,4.19,1.87,4.19,4.19,0,2.31-1.87,4.19-4.19,4.19,0,0-11.24,0-11.24,0-5.53-.17-5.53-8.2,0-8.37Z"
                  />
                  <path
                    className="cls-3"
                    d="M65.64,7.27c-2.93,4.23-7.59,4.94-10.08-.11,0,0-.03-.04-.03-.04l.08-.05.03.04c3.66,4.97,5.69,2.35,9.93.09,0,0,.05-.02.05-.02l.05.05s-.03.04-.03.04h0Z"
                  />
                  <path
                    className="cls-1"
                    d="M51.49,1.86c4.03,2.24,5.8,9.88,10.44,7.99"
                  />
                </g>
              </g>
            </motion.svg>
          </div>
          <div className="text-container">
            <motion.h1
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8, rotate }}
              onTap={handleTap}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
              style={{ userSelect: "none" }}
            >
              {"<Le Thanh Vu"}
              <span style={{ color: "var(--primary)" }}>{" /"}</span>
              {">"}
            </motion.h1>
          </div>
          <Button
            variant="secondary"
            onClick={toggleTheme}
            className="theme-button"
          >
            {isDarkMode ? <FaSun color="black" /> : <FaMoon />}
          </Button>
        </div>
        <div className="intro-container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", bounce: 0.5 },
            }}
          >
            Hi, I'm{" "}
            <motion.span
              animate={{
                opacity: showFirstName ? 0 : 1,
                transition: { ease: ["easeIn", "easeOut"] },
              }}
              style={{ display: showFirstName ? "none" : "inline" }}
            >
              Thanh Vu{" "}
              <img
                src={vnFlag}
                alt="Vietnam Flag"
                style={{ width: "50px", height: "50px" }}
              />
            </motion.span>
            <motion.span
              animate={{
                opacity: showFirstName ? 1 : 0,
                transition: { ease: ["easeIn", "easeOut"] },
              }}
              style={{ display: showFirstName ? "inline" : "none" }}
            >
              Conor{" "}
              <img
                src={caFlag}
                alt="Canada Flag"
                style={{ width: "50px", height: "50px" }}
              />
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", bounce: 0.5 },
            }}
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.5 }}
                style={{
                  display: "inline-block",
                  background: "var(--linearPrimaryAccent)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "inherit",
                  userSelect: "none",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <div className="scrolldown-container">
          <Scrolldown />
        </div>
      </section>
      <section id="shortbio">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        >
          <AnimatedSVG />
          <motion.div>
            <motion.p>A BIT ABOUT ME</motion.p>
            <motion.p>
              I'm a Computer Programming and Analysis student at George Brown
              College with a passion for backend development, software
              engineering, and self-taught UX/UI design. I thrive on
              problem-solving and continuously expanding my knowledge. My
              philosophy is to embrace challenges, learn from failures, and stay
              curious. Like a tree, I keep growing through every season,
              striving until I can taste the fruits of my hard work.
            </motion.p>
            <motion.p>Let’s not stop here—scroll for more!</motion.p>
          </motion.div>
        </motion.div>
      </section>
      <section id="expertise">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginTop: "auto",
            marginBottom: "auto",
            flexDirection: "column",
          }}
        >
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            style={{
              fontSize: "3rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            My Expertise{""}
            <span style={{ color: "var(--primary)" }}>.</span>
          </motion.h1>
          <Card />
        </div>
      </section>
      <hr />
      <section id="projects">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginTop: "auto",
            marginBottom: "auto",
            flexDirection: "column",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            style={{
              fontSize: "3rem",
              marginTop: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Past Projects{""}
            <span style={{ color: "var(--primary)" }}>.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Here are some of my past projects I've worked on. Want to see more?
            Here's my{" "}
            <a
              href="https://github.com/thanhvu2004"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--primary)" }}
            >
              GitHub
            </a>
            {""}.
          </motion.p>
          <Projects />
        </div>
      </section>
      <section id="learnmore">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", bounce: 0.5 },
            }}
            style={{
              display: "flex",
              gap: "2px",
            }}
          >
            Intrigued? My&nbsp;
            <motion.span
              style={{
                display: "inline-block",
                background: "var(--linearPrimaryAccent)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "inherit",
                userSelect: "none",
              }}
            >
              resume
            </motion.span>
            &nbsp;holds the details
          </motion.h2>
          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 0],
              backgroundColor: "var(--primary)",
              transition: { duration: 0.3 },
            }}
            style={{
              border: "none",
              padding: "0.5rem 1rem",
              marginTop: "1rem",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "var(--text)",
              color: "var(--background)",
              fontSize: "1.5rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            Check It Out
            <svg
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
            >
              <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
              <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
            </svg>
          </motion.button>
        </div>
      </section>

      <section id="social">
        <motion.div
          style={{
            backgroundColor: "#12120D",
            padding: "2rem",
            borderRadius: "10px",
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        >
          <motion.h1
            style={{
              fontSize: "3rem",
              marginBottom: "2rem",
              textAlign: "center",
              color: "white",
            }}
          >
            Let's Connect{""}
            <span style={{ color: "var(--primary)" }}>.</span>
          </motion.h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/thanh-vu-le-626a532a5/"
              target="_blank"
              className="social-button"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/thanhvu2004"
              target="_blank"
              className="social-button"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </Button>
            <Button
              variant="secondary"
              href="mailto:lethanhvu2004@gmail.com"
              target="_blank"
              className="social-button"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
              </svg>
            </Button>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", bounce: 0.5 },
          }}
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "1rem",
          }}
        >
          {" "}
          <svg width="16" height="16" fill="currentColor">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
          </svg>{" "}
          2025 Thanh Vu Le
        </motion.p>
      </section>
      <Button
        variant="secondary"
        onClick={scrollToTop}
        className="totop-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: showToTopButton ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "sticky",
          bottom: "20px",
          transform: "translateX(90vw) translateY(1vh)",
        }}
      >
        <FaArrowUp color={isDarkMode ? "black" : "white"} />
      </Button>
      <Pointer />
    </div>
  );
}

const img = {
  width: 100,
  height: 100,
  borderRadius: 10,
};

export default App;
