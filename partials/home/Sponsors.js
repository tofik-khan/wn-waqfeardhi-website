import SponsorImage from "../SponsorImage";
import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";

export const Sponsors = () => {
  return (
    <>
      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Row>
          <Col>
            <h2 align={"center"} style={{ marginBottom: "80px" }}>
              Our Sponsors
            </h2>
          </Col>
        </Row>
        <Row className="py-5" style={{ marginBottom: "80px" }}>
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
        <Row
          className="justify-content-center"
          style={{ marginBottom: "80px" }}
        >
          <Col xs={"auto"}>
            <a
              className="button inherit"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHrX5G_aHNlpF8TQqBxU8L19CmHV9s2K_OKZUMm-jnJjz04A/viewform?pli=1"
              target="_blank"
              rel="noreferrer"
            >
              Become a Sponsor
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
