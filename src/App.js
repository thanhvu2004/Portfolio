import {} from "react-bootstrap";
import vnFlag from "./vn.png";
import caFlag from "./ca.png";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import Pointer from "./Pointer";
import Card from "./Card";
import Scrolldown from "./ScrollDown";
import "./App.css";
import "./colors.css";

function App() {
  const [rotate, setRotate] = useState(-3);
  const [showFirstName, setShowFirstName] = useState(true);
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

  return (
    <div className="App">
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
      <section id="expertise">
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
      </section>
      <section id="projects"></section>
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
