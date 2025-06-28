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
              <SponsorImage image="/sponsors/amc.png" alt="" />
              <SponsorImage
                image="/sponsors/amla.png"
                alt="Ahmadiyya Muslim Lawyers Association"
              />
              <SponsorImage
                image="/sponsors/amma.jpeg"
                alt="Ahmadiyya Muslim Medical Association"
              />
              <SponsorImage
                image="/sponsors/ansar.png"
                alt="Majlis Ansar-ul-Allah USA"
              />
              <SponsorImage
                image="/sponsors/atfal.png"
                alt="Majlis Atfal-ul-Ahmadiyya USA"
              />
              <SponsorImage image="/sponsors/wn.png" alt="Waqf-e-Nau" />
              <SponsorImage image="/sponsors/lajna.png" alt="Lajna Imaullah" />
              <SponsorImage
                image="/sponsors/awsa.jpeg"
                alt="Ahmadi Women Scientist Association"
              />
              <SponsorImage
                image="/sponsors/humanity-first.jpeg"
                alt="Humanity First"
              />
              <SponsorImage
                image="/sponsors/iaaae.png"
                alt="International Association of Ahmadi Architects and Engineers"
              />
              <SponsorImage
                image="/sponsors/amc-usa.png"
                alt="Ahmadiyya Movement in Islam"
              />
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
