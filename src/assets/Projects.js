import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as motion from "motion/react-client";
import "./css/Projects.css"; // Create and import a CSS file for styling

const projectData = [
  {
    id: 1,
    name: "Project 1",
    description: "Description for Project 1",
    images: ["image1a.png", "image1b.png"],
    link: "https://example.com/project1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description for Project 2",
    images: ["image2a.png", "image2b.png"],
    link: "https://example.com/project2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description for Project 3",
    images: ["image3a.png", "image3b.png"],
    link: "https://example.com/project3",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description for Project 4",
    images: ["image4a.png", "image4b.png"],
    link: "https://example.com/project4",
  },
  {
    id: 5,
    name: "Project 5",
    description: "Description for Project 5",
    images: ["image5a.png", "image5b.png"],
    link: "https://example.com/project5",
  },
  {
    id: 6,
    name: "Project 6",
    description: "Description for Project 6",
    images: ["image6a.png", "image6b.png"],
    link: "https://example.com/project6",
  },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("./assets", false, /\.(png|jpe?g|svg)$/)
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
            <p>{selectedProject.description}</p>
          </Modal.Body>
          <Modal.Footer className="custom-modal-footer">
            <Button
              variant="outline-danger"
              href={selectedProject.link}
              target="_blank"
            >
              View Site
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
