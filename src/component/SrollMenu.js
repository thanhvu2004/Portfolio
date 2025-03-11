import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/ScrollMenu.css";

const sections = [
  { id: "shortbio", label: "<ShortBio />" },
  { id: "expertise", label: "<Expertise />" },
  { id: "projects", label: "<Projects />" },
  { id: "learnmore", label: "<LearnMore />" },
];

export default function ScrollMenu() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Observe the "home" section separately to hide the scroll menu
    const homeElement = document.getElementById("home");
    if (homeElement) {
      observer.observe(homeElement);
    }

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });

      if (homeElement) {
        observer.unobserve(homeElement);
      }
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {activeSection !== "home" && (
        <motion.div
          className="scroll-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {sections.map((section) => (
            <motion.h3
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              onClick={() => handleScrollToSection(section.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {section.label}
            </motion.h3>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
