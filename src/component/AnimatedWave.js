import { motion } from "framer-motion";
import me from "../assets/me.JPG";

const firstWavePath = "M0,10 Q15,0 30,10 T60,10 T90,10 T120,10 T150,10 T180,10"; // A subtle wave

const secondWavePath =
  "M0,10 Q15,20 30,10 T60,10 T90,10 T120,10 T150,10 T180,10"; // More pronounced wave

export default function AnimatedSVG() {
  return (
    <motion.div>
      {/* Image */}
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

