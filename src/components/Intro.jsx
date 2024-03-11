import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import illustration from "../assets/images/intro-section-illustration.png";
import { VideoModal } from "./video-modal";
import { useState } from "react";

export const Intro = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="intro-section">
        <Container>
          <Row className="align-items-center text-white">
            {/* Intro column */}
            <Col>
              <h1 className="display-2">
                <span className="display-2--intro">Bootstrap</span>
                <span className="display-2--description lh-base">
                  Bootstrap is the most popular HTML, CSS, and JavaScript
                  framework for developing responsive, mobile-first websites.
                </span>
              </h1>
              <Button
                variant="light"
                className="rounded-pill custom-btn-rounded"
              >
                Get In touch{" "}
                <span className="py-1">
                  <FontAwesomeIcon
                    className="text-white"
                    icon="fas fa-arrow-right"
                    size="lg"
                  />
                </span>
              </Button>
            </Col>
            {/* video column */}
            <Col md={6} className="intros text-end">
              <div className="video-box">
                <Image
                  src={illustration}
                  alt="video-illustration"
                  className="img-fluid"
                />
                <NavLink
                  href="#"
                  onClick={() => setShowModal(true)}
                  // ref={glightbox.ref}
                  className="lightbox position-absolute start-50 top-50 translate-middle"
                >
                  <FontAwesomeIcon
                    className="play-icon"
                    icon="fas fa-play-circle"
                    size="lg"
                  />
                  <span className="border-animation border-animation--first"></span>
                  <span className="border-animation border-animation--second"></span>
                </NavLink>
              </div>
            </Col>
            <VideoModal showModal={showModal} onhideModal={() => setShowModal(false)}/>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L30,176C60,160,120,128,180,106.7C240,85,300,75,360,112C420,149,480,235,540,245.3C600,256,660,192,720,186.7C780,181,840,235,900,240C960,245,1020,203,1080,176C1140,149,1200,139,1260,149.3C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};
