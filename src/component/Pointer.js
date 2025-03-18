import { frame, motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";
import "../css/colors.css";

export default function Drag() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [isTapped, setIsTapped] = useState(false);

  // Check if the user is on a mobile device
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return null; // Disable the pointer script on mobile
  }

  return (
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
      className="ball"
    />
  );
}

const springConfig = { damping: 90, stiffness: 5000, restDelta: 0.001 };

function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, springConfig);
  const y = useSpring(yPoint, springConfig);

  const updatePosition = useCallback(
    (clientX, clientY) => {
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
      });
    },
    [ref, xPoint, yPoint]
  );

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
  }, [ref, updatePosition]);

  return { x, y };
}

const ballStyle = {
  width: 20,
  height: 20,
  backgroundColor: "var(--fill-color)",
  borderRadius: "50%",
  position: "absolute",
  zIndex: 1057,
};

document.body.style.cursor = "none";