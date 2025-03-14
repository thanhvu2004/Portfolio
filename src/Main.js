import { Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import Pointer from "./component/Pointer";
import Card from "./component/Card";
import Scrolldown from "./component/ScrollDown";
import Projects from "./component/Projects";
import AnimatedSVG from "./component/AnimatedWave";
import NavigateButton from "./component/NavigateButton";
import ScrollMenu from "./component/SrollMenu";
import TopBar from "./component/TopBar";
import vnFlag from "./assets/vn.png";
import caFlag from "./assets/ca.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Buttons.css";
import "./css/Main.css";
import "./css/colors.css";
import "./css/Font.css";
import SocialSection from "./component/Social";

function Main() {
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
    const currentTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
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
      if (!homeSection) return;
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
        <TopBar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          handleTap={handleTap}
          rotate={rotate}
        />
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
      <ScrollMenu />
      <section id="shortbio">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        >
          <AnimatedSVG />
          <motion.div>
            <motion.p
              style={{
                color: "var(--text)",
                fontWeight: "bold",
              }}
              className="responsive-text"
            >
              A BIT ABOUT ME<span style={{ color: "var(--primary)" }}>.</span>
            </motion.p>
            <motion.p className="responsive-text">
              I'm a Computer Programming and Analysis student at George Brown
              College with a passion for backend development, software
              engineering, and self-taught UX/UI design. I thrive on
              problem-solving and continuously expanding my knowledge. My
              philosophy is to embrace challenges, learn from failures, and stay
              curious. Like a tree, I keep growing through every season,
              striving until I can taste the fruits of my hard work.
            </motion.p>
            <motion.p className="responsive-text">
              Let’s not stop here—scroll for more!{" "}
              <motion.svg
                width="16"
                height="16"
                fill="var(--primary)"
                initial={{ y: 10 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </motion.svg>
              <motion.svg
                width="16"
                height="16"
                fill="var(--primary)"
                initial={{ y: 10 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </motion.svg>
              <motion.svg
                width="16"
                height="16"
                fill="var(--primary)"
                initial={{ y: 10 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              >
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
              </motion.svg>
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <section id="expertise">
        <div className="section-with-background-opacity">
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
            My Projects{""}
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
            Here are some of my projects I've worked on. Want to see more?
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
          <NavigateButton />
        </div>
      </section>

      <section id="social">
        <SocialSection />
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
      <Pointer className="custom-pointer" />
    </div>
  );
}

export default Main;
