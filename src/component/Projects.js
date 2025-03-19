import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as motion from "motion/react-client";
import "../css/Projects.css"; // Create and import a CSS file for styling

const projectData = [
  {
    id: 1,
    name: "Image Gallery",
    codingLanguges: "HTML, CSS, PHP, SQL",
    description:
      "This is my personal image gallery project, created in 2022 when I started learning web development. As a beginner, I jumped right into coding, enjoying the experience without overthinking it. Through this process, I gained skills in Bootstrap, CSS, PHP, SQL, and more. After finishing the project, I explored web hosting and Cloudflare to host and secure my website locally. This project marked a significant milestone in my web development journey, and I'm proud of the progress I've made.",
    images: ["image1a.png", "image1b.png", "image1c.png", "image1d.png"],
    link: "https://thanhvugallery.me",
  },
  {
    id: 2,
    name: "PlanIt",
    codingLanguges: "JavaScript (Node.js, React), MongoDB",
    description:
      "PlanIt is a user-friendly, collaborative online scheduling platform aimed at simplifying the process of organizing meetings and events. It allows multiple users to input their availability, automatically identifying the most suitable time for all participants. With features like real-time updates and time zone management, PlanIt eliminates the need for back-and-forth communication, helping teams and groups coordinate effortlessly. Coded using Node.js, Express, and MongoDB for Capstone class.",
    images: [
      "image2a.png",
      "image2b.png",
      "image2c.png",
      "image2d.png",
      "image2e.png",
    ],
    relatedDocuments:
      "https://drive.google.com/drive/folders/1cVyf7IUDcdsIUQQnJovCzJJBJOQATAaV?usp=drive_link",
    link: "https://github.com/thanhvu2004/COMP3078_Capstone_PlanIt",
  },
  {
    id: 3,
    name: "To-Do App",
    codingLanguges: "Swift",
    description:
      "A simple to-do app that helps users organize their tasks and manage their time effectively. Users can create, edit, and delete tasks, as well as mark them as complete. The app also features a search function, allowing users to filter tasks by keyword. With a clean and intuitive interface, the to-do app is designed to enhance productivity and streamline task management. Coded using Xcode and Swift for Mobile Application Development class.",
    images: ["image3a.png", "image3b.png", "image3c.png", "image3d.png"],
    relatedDocuments:
      "https://drive.google.com/drive/folders/14NwieUdLtoO3jdEFf2KlCgv4HB4bPNlN?usp=drive_link",
    link: "https://github.com/thanhvu2004/COMP3097-G10-ToDoApp",
  },
  {
    id: 4,
    name: "Employee Management System",
    codingLanguages:
      "JavaScript (React, Node.js, Express), MongoDB, Dockerfile",
    description:
      "This project is an Employee Management Application built with React for the frontend and Node.js/Express for the backend. It allows users to manage employee data, including creating, editing, viewing, and deleting employee records. The application also features a search function, enabling users to filter employees by department, and/or position. With a clean and user-friendly interface, the Employee Management System is designed to streamline HR processes and enhance efficiency.",
    images: ["image4a.png", "image4b.png", "image4c.png"],
    relatedDocuments:
      "https://github.com/thanhvu2004/COMP3123_EmployeeManagementApp/blob/master/README.md",
    link: "https://github.com/thanhvu2004/COMP3123_EmployeeManagementApp",
  },
  {
    id: 5,
    name: "Connect 4 Game",
    codingLanguages: "Java and JavaFX",
    description:
      "This project is a Connect 4 game built with Java. It allows two players to take turns dropping colored discs from the top into a grid or let you play with an AI. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. The Ai of the game is implemented using the Minimax algorithm with Alpha-Beta pruning. The game features a user-friendly interface, allowing players to easily interact with the game board using JavaFX. The Connect 4 game is designed to provide an engaging and challenging experience for players of all ages.",
    images: ["image5a.png"],
    relatedDocuments:
      "https://github.com/thanhvu2004/Connect4minimaxGame/blob/master/README.md",
    link: "https://github.com/thanhvu2004/Connect4minimaxGame",
  },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.cursor = "auto";
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.cursor = "none";
  };

  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("../assets", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="projects-container">
      {projectData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="project-card"
          onClick={() => handleShow(project)}
        >
          <img
            src={images[project.images[0]]}
            alt={project.name}
            className="project-image"
          />
          <div className="project-title-overlay">
            <h3>{project.name}</h3>
            <p>Click to view details</p>
          </div>
        </motion.div>
      ))}

      {selectedProject && (
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          className="custom-modal"
        >
          <Modal.Header closeButton className="custom-modal-header">
            <Modal.Title>{selectedProject.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal-body">
            <Carousel>
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={images[image]}
                    alt={`${selectedProject.name} ${index + 1}`}
                    className="modal-image"
                  />
                </div>
              ))}
            </Carousel>
            <h4>Coding Languages: {selectedProject.codingLanguges}</h4>
            <p>{selectedProject.description}</p>
          </Modal.Body>
          <Modal.Footer className="custom-modal-footer">
            {selectedProject.relatedDocuments && (
              <a
                href={selectedProject.relatedDocuments}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
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
                    marginRight: "1rem",
                    cursor: "pointer",
                    borderRadius: "5px",
                    backgroundColor: "var(--text)",
                    color: "var(--background)",
                    fontSize: "1.5rem",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  }}
                >
                  Related Documents
                </motion.button>
              </a>
            )}
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
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
                  backgroundColor: "var(--primary)",
                  color: "var(--background)",
                  fontSize: "1.5rem",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              >
                Take a Look
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
            </a>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
