import { motion } from "framer-motion";
import "./css/colors.css";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const loopDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: "spring",
        duration: 1.5,
        bounce: 0,
        repeat: Infinity,
        repeatType: "loop",
      },
      opacity: { duration: 0.01 },
    },
  },
};

export default function Scrolldown() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 21"
      width="50"
      height="100"
      initial="hidden"
      animate="visible"
      style={image}
    >
      <motion.rect
        x="0.5"
        y="0.5"
        width="10"
        height="20"
        rx="5"
        ry="5"
        stroke="var(--stroke-color)"
        fill="none"
        strokeMiterlimit="10"
        variants={draw}
        custom={1}
        style={shape}
      />
      <motion.polyline
        points="6.27 4.52 6.27 9.23 3.71 10.88 6.27 12.55 6.27 15.55 4.05 13.66"
        stroke="var(--stroke-color)"
        fill="none"
        strokeMiterlimit="10"
        variants={loopDraw}
        custom={2}
        style={shape}
      />
    </motion.svg>
  );
}

const image = {
  maxWidth: "80vw",
};

const shape = {
  strokeWidth: 1,
  strokeLinecap: "round",
  fill: "transparent",
};
