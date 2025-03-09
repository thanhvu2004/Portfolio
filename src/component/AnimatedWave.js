import { motion } from "framer-motion";
import me from "../assets/me.JPG";
import { useState } from "react";

const firstWavePath = "M0,10 Q15,0 30,10 T60,10 T90,10 T120,10 T150,10 T180,10"; // A subtle wave

const secondWavePath =
  "M0,10 Q15,20 30,10 T60,10 T90,10 T120,10 T150,10 T180,10"; // More pronounced wave

export default function AnimatedSVG() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div>
      {/* Image */}
      <motion.div
        style={{ position: "relative", width: "100%", height: "auto" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.img
          src={me}
          alt="a picture of me"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            This is me in my natural habitat
          </motion.div>
        )}
      </motion.div>

      {/* Animated Wavy SVG */}
      <motion.svg
        viewBox="0 0 180 20"
        style={{
          marginTop: "2rem",
          height: "50px",
          width: "100%",
        }}
      >
        <motion.path
          fill="none"
          stroke="var(--stroke-color)"
          strokeWidth="2"
          d={firstWavePath}
          animate={{ d: [firstWavePath, secondWavePath, firstWavePath] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.div>
  );
}