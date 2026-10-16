import { Container, Row, Col } from "react-bootstrap";

export const Certificate = () => {
  return (
    <>
      <Container style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        <Row>
          <Col>
            <h2 align={"center"} style={{ marginBottom: "40px" }}>
              Work Completed? Get your certificate
            </h2>
          </Col>
        </Row>
        <Row>
          <Col align={"center"}>
            <a
              className="button primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSekgvsKPw3mQZNYAACuRBi64xeY6GNZDHkL90xicEqLIdwnJQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Volunteer Certificate Form
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
