import { Col, Container, Row } from "react-bootstrap";
import "./Companies.scss";

export const Companies = () => {
    return (
        <section className="companies-section">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <h4 className="heading-line fw-bold lead mb-4">Trusted by the world{"'"}s best companies</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}