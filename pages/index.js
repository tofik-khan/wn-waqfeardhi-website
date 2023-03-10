import { Navigation } from "../partials/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../components/Banner";
import { Heading1, Heading2, Paragraph } from "../components/Text";
import Button from "../components/Button";
import OpportunityCard from "../partials/OppyCard";
import Marquee from "react-fast-marquee";
import SponsorImage from "../partials/SponsorImage";
import Footer from "../partials/Footer";
import HomepageCarousel from "../partials/HomepageCarousel";

const opportunities = require("/content/oppy.json");

export default function Page() {
  return (
    <>
      <Navigation />
      <HomepageCarousel />
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
          {opportunities.map((element, index) => (
            <Col xs={6} md={4} lg={3} className="mt-5" key={index}>
              <OpportunityCard
                image={element.image}
                heading={element.heading}
                content={element.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="mt-5 py-5">
        <Row>
          <Col>
            <Heading2 align={"center"}>Our Sponsors</Heading2>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <Marquee>
              <SponsorImage image="/sponsors/amc.png" />
              <SponsorImage image="/sponsors/amla.png" />
              <SponsorImage image="/sponsors/amma.jpeg" />
              <SponsorImage image="/sponsors/ansar.png" />
              <SponsorImage image="/sponsors/atfal.png" />
              <SponsorImage image="/sponsors/wn.png" />
              <SponsorImage image="/sponsors/lajna.png" />
              <SponsorImage image="/sponsors/awsa.jpeg" />
              <SponsorImage image="/sponsors/humanity-first.jpeg" />
              <SponsorImage image="/sponsors/iaaae.png" />
              <SponsorImage image="/sponsors/amc-usa.png" />
              <SponsorImage image="/sponsors/wn.png" />
            </Marquee>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <Paragraph align={"center"}>
              Be a catalyst for spiritual, personal & professinal growth -
              become a sponsor of Waqf-e-Arzi projects today!
            </Paragraph>
          </Col>
        </Row>
        <Row className="justify-content-center py-3">
          <Col xs={"auto"}>
            <Button
              variant={"primary"}
              size={"large"}
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHrX5G_aHNlpF8TQqBxU8L19CmHV9s2K_OKZUMm-jnJjz04A/viewform?pli=1"
              target="_blank"
              rel="noreferrer"
            >
              Become a Sponsor
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
