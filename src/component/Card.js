import "../css/card.css";
import * as motion from "motion/react-client";

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {data.map(({ title, description }, i) => (
        <Card key={i} title={title} description={description} />
      ))}
    </div>
  );
}

function Card({ title, description }) {
  return (
    <motion.div
      style={cardContainer}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
    >
      <motion.div style={card} whileHover={{ scale: 1.1 }}>
        <h1 className="card-title">{title}</h1>
        <p className="card-detail">{description}</p>
      </motion.div>
    </motion.div>
  );
}

const container = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "0 auto",
  maxWidth: "960px",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  marginBottom: "2rem",
};

const card = {
  width: 300,
  height: 300,
  background: "var(--secondary)",
  opacity: 0.9,
  color: "var(--text)",
  borderRadius: 20,
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
};

const data = [
  {
    title: "Web",
    description:
      "I have experience building and deploying dynamic, scalable websites, using modern frameworks and hosting solutions like Express.js, Nginx, and Cloudflare.",
  },
  {
    title: "Software",
    description:
      "My background includes designing and implementing microservices-based applications using Spring Boot, PostgreSQL, and MongoDB for scalable backend solutions.",
  },
  {
    title: "Frontend",
    description:
      "I create interactive and responsive user interfaces with React, Bootstrap, and Framer Motion, ensuring seamless user experiences across devices.",
  },
];