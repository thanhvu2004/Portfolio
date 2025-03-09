import { frame, motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "../css/colors.css";

export default function Drag() {
  const ref = useRef(null);
  const { x, y, x1, y1 } = useFollowPointer(ref);
  const [isTapped, setIsTapped] = useState(false);

  return (
    <>
      <motion.div style={{ ...backBallStyle, x: x1, y: y1 }} />
      <motion.div
        ref={ref}
        style={{
          ...ballStyle,
          x,
          y,
          pointerEvents: isTapped ? "auto" : "none",
        }}
        whileTap={{ scale: 1.5 }}
        onTapStart={() => setIsTapped(true)}
        onTap={() => setIsTapped(false)}
      />
    </>
  );
}

const springConfig = { damping: 90, stiffness: 5000, restDelta: 0.001 };

function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x1Point = useMotionValue(0);
  const y1Point = useMotionValue(0);
  const x = useSpring(xPoint, springConfig);
  const y = useSpring(yPoint, springConfig);
  const x1 = useSpring(x1Point, springConfig);
  const y1 = useSpring(y1Point, springConfig);

  const updatePosition = (clientX, clientY) => {
    if (!ref.current) return;
    const element = ref.current;

    frame.read(() => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      xPoint.set(
        clientX - element.offsetLeft - element.offsetWidth / 2 + scrollX - 20
      );
      yPoint.set(
        clientY - element.offsetTop - element.offsetHeight / 2 + scrollY - 20
      );
      x1Point.set(
        clientX - element.offsetLeft - element.offsetWidth / 2 - 90 + scrollX
      );
      y1Point.set(
        clientY - element.offsetTop - element.offsetHeight / 2 - 90 + scrollY
      );
    });
  };

  useEffect(() => {
    if (!ref.current) return;

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const handlePointerMove = ({ clientX, clientY }) => {
      lastX = clientX;
      lastY = clientY;
      updatePosition(clientX, clientY);
    };

    const handleScroll = () => {
      updatePosition(lastX, lastY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, xPoint, yPoint, x1Point, y1Point]);

  return { x, y, x1, y1 };
}

const ballStyle = {
  width: 20,
  height: 20,
  backgroundColor: "var(--fill-color)",
  borderRadius: "50%",
  position: "absolute",
  zIndex: 1057,
  //pointerEvents: "none",
};

const backBallStyle = {
  width: 200,
  height: 200,
  backgroundColor: "white",
  borderRadius: "50%",
  position: "absolute",
  pointerEvents: "none",
  filter: "blur(200px)",
  zIndex: -2,
};

document.body.style.cursor = "none";