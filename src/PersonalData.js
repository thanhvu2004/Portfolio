import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TopBar from "./component/TopBar";
import Pointer from "./component/Pointer";
import PersonalSection from "./component/Social";
import me from "./assets/me2.JPG";
import "./css/Accordion.css";

export default function PersonalData() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rotate, setRotate] = useState(-3);

  const handleTap = () => {
    setRotate((prevRotate) => (prevRotate === -3 ? 3 : -3));
  };

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

  const education = [
    {
      year: "2022 - 2025",
      detail:
        "Diploma of Computer Programming and Analysis at George Brown College, Toronto",
    },
    { year: "2019 - 2022", detail: "FPT Hanoi Highschool, Hanoi" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className="personal-data-container" style={{ contain: "layout" }}>
      <TopBar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        handleTap={handleTap}
        rotate={rotate}
      />
      <div
        className="Resume"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        <div
          className="leftSide"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "25%",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <motion.img
            src={me}
            alt="me"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              display: "block",
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          />
          <h2>
            Xin chào
            <motion.div
              style={{ display: "inline-block" }}
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              👋
            </motion.div>
            !
          </h2>
        </div>
        <div className="rightSide">
          <h2>
            My name is <span style={{ color: "var(--primary)" }}>Thanh Vu</span>
            ,{" "}
            <span style={{ fontSize: "1.1rem" }}>
              but you can call me Conor
            </span>
            <span style={{ color: "var(--primary)" }}>.</span>
          </h2>
          <hr />
          <p>
            &nbsp;&nbsp;&nbsp;Dedicated and enthusiastic student pursuing a
            Computer Programming and Analysis diploma at George Brown College.
            Passionate about programming and technology since 2019, with
            hands-on experience in software development through academic
            projects and personal initiatives. Strong background in customer
            service, leadership, and teamwork, with proven ability to manage
            fast-paced environments and guide teams in competitive settings.
            Highly organized, detail-oriented, and adaptable, eager to
            contribute technical and problem-solving skills to a dynamic
            workplace.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              marginBottom: "1.5rem",
            }}
          >
            <h2 style={{ minWidth: "fit-content", marginBottom: "0" }}>
              Education
            </h2>
            <motion.div
              style={{
                height: "4px",
                backgroundColor: "var(--primary)",
                width: "100%",
                borderRadius: "3px",
                marginTop: "auto",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div
            className="Education"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              gap: "2rem",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {education.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    width: "150px",
                    minWidth: "150px",
                    height: "24px",
                  }}
                >
                  {item.year}
                </p>
                <p style={{ textAlign: "left", flex: 1 }}>{item.detail}</p>{" "}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              marginBottom: "1.5rem",
            }}
          >
            <h2 style={{ minWidth: "fit-content", marginBottom: "0" }}>
              Job Experience
            </h2>
            <motion.div
              style={{
                height: "4px",
                backgroundColor: "var(--primary)",
                width: "100%",
                borderRadius: "3px",
                marginTop: "auto",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div
            className="Job Experience"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              gap: "2rem",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0" className="custom-accordion-item">
                <Accordion.Header>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "150px",
                        minWidth: "150px",
                        height: "24px",
                      }}
                    >
                      2024 - Present
                    </p>
                    <p style={{ textAlign: "left", flex: 1 }}>
                      Manager @ Tanghulu Tanghulu, Toronto
                    </p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Leadership & Team Management: Oversaw daily operations,
                      coordinated staff, and ensured smooth workflow in a
                      fast-paced environment.
                    </li>
                    <li>
                      Problem-Solving & Decision-Making: Addressed operational
                      challenges efficiently, improving service quality and
                      customer satisfaction.
                    </li>
                    <li>
                      Inventory & Data Management: Monitored stock levels,
                      optimized ordering processes, and maintained accurate
                      records using digital tools.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="custom-accordion-item">
                <Accordion.Header>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "150px",
                        minWidth: "150px",
                        height: "24px",
                      }}
                    >
                      2024 - 2025
                    </p>
                    <p style={{ textAlign: "left", flex: 1 }}>
                      Cashier & Barista @ GongCha YorkU, Toronto
                    </p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Customer Interaction & Communication: Provided excellent
                      service, handled transactions, and resolved customer
                      inquiries efficiently.
                    </li>
                    <li>
                      Process Optimization: Maintained workflow efficiency by
                      organizing tasks and improving beverage preparation speed.
                    </li>
                    <li>
                      Quality Assurance & Compliance: Adhered to health and
                      safety standards, ensuring consistency in product quality.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="custom-accordion-item">
                <Accordion.Header>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "150px",
                        minWidth: "150px",
                        height: "24px",
                      }}
                    >
                      2022 - 2024
                    </p>
                    <p style={{ textAlign: "left", flex: 1 }}>
                      Cashier & Cook @ Chungchun StockYard, Toronto
                    </p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Attention to Detail & Accuracy: Ensured order precision
                      and maintained high-quality service standards.
                    </li>
                    <li>
                      Technical Support & Training: Assisted in onboarding and
                      training new employees, optimizing team performance.
                    </li>
                    <li>
                      Inventory & Workflow Management: Managed stock levels,
                      organized workstations, and streamlined operational
                      processes.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="custom-accordion-item">
                <Accordion.Header>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "150px",
                        minWidth: "150px",
                        height: "24px",
                      }}
                    >
                      2021 - 2022
                    </p>
                    <p style={{ textAlign: "left", flex: 1 }}>
                      IELTS tutor @ SEN English Center, Hanoi
                    </p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Analytical & Problem-Solving Skills: Assessed student
                      performance and tailored teaching methods to improve
                      outcomes.
                    </li>
                    <li>
                      Digital Literacy & Remote Learning: Utilized online
                      platforms and virtual classrooms to deliver effective
                      training sessions.
                    </li>
                    <li>
                      Communication & Interpersonal Skills: Communicated
                      effectively with students and parents to address concerns
                      and provide feedback.
                    </li>
                    <li>
                      Data-Driven Decision Making: Tracked progress metrics and
                      optimized lesson plans based on student performance
                      analytics.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              marginBottom: "1.5rem",
            }}
          >
            <h2 style={{ minWidth: "fit-content", marginBottom: "0" }}>
              Skills
            </h2>
            <motion.div
              style={{
                height: "4px",
                backgroundColor: "var(--primary)",
                width: "100%",
                borderRadius: "3px",
                marginTop: "auto",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div
            className="Skills"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              gap: "2rem",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  width: "150px",
                  minWidth: "150px",
                  height: "24px",
                }}
              >
                Language
              </p>
              <p style={{ textAlign: "left", flex: 1 }}>
                Vietnamese (Native), English (Fluent)
              </p>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  width: "150px",
                  minWidth: "150px",
                  height: "24px",
                }}
              >
                Tech Stack
              </p>
              <p style={{ textAlign: "left", flex: 1 }}>
                <strong>Languages:</strong> Java, Python, C#, JavaScript, HTML,
                CSS, SQL, PHP
                <br />
                <strong>Frameworks & Libraries:</strong> Node.js, React,
                Express, Bootstrap, Material-UI
                <br />
                <strong>Cloud & Servers:</strong> Cloudflare, AWS, Azure, Nginx,
                Apache, Docker
                <br />
                <strong>Version Control:</strong> Git, GitHub
                <br />
                <strong>Development Tools:</strong> VS Code, IntelliJ IDEA,
                Xcode, Android Studio
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  width: "150px",
                  minWidth: "150px",
                  height: "24px",
                }}
              >
                Other
              </p>
              <p style={{ textAlign: "left", flex: 1 }}>
                Photography, Video Editing, Graphic Design, 3D Modeling
              </p>
            </div>
          </div>
        </div>
      </div>
      <PersonalSection />
      <Pointer />
    </div>
  );
}
