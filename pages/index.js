import { Navigation } from "../partials/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../components/Banner";
import { Heading2, Paragraph } from "../components/Text";
import Button from "../components/Button";
import OpportunityCard from "../partials/OppyCard";

const opportunities = require("/content/oppy.json");

export default function Page() {
  return (
    <>
      <Navigation />
      <Banner variant="light">
        <Container>
          <Row>
            <Col>
              <Heading2 align={"center"}>Start your Waqf</Heading2>
            </Col>
          </Row>
          <Row className="justify-content-center py-3">
            <Col md={8}>
              <Paragraph align={"center"}>
                Joining Waqf-e-Arzi can be a transformative experience that will
                enhance all aspects of your life. Take the first step towards
                spiritual growth and personal development by joining Waqf-e-Arzi
                today.
              </Paragraph>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={"auto"}>
              <Button variant="primary" size="large" href="/listings">
                Browse Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </Banner>
      <Container className="mt-5 py-5">
        <Row>
          <Col>
            <Heading2 align={"center"}>Possible Opportunities</Heading2>
          </Col>
        </Row>
        <Row>
          {opportunities.map((element) => (
            <Col xs={6} md={4} lg={3} className="mt-5">
              <OpportunityCard
                image={element.image}
                heading={element.heading}
                content={element.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
