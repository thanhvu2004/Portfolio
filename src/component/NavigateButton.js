import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavigateButton() {
  const navigate = useNavigate();

  return (
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
      onClick={() => navigate("/resume")}
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
  );
}

export default NavigateButton;