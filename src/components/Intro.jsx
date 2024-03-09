import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Intro = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <h1>Bootstrap</h1>
              <p>
                Bootstrap is the most popular HTML, CSS, and JavaScript
                framework for developing responsive, mobile-first websites.
              </p>
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
          </Row>
        </Container>
      </section>
    </>
  );
};
