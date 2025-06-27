import { Container, Row, Col } from "react-bootstrap";
import VolunteerArea from "../../components/VolunteerArea";
const volunteerAreas = require("../../content/oppy.json");

export const VolunteerAreas = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#F4F6F8", width: "100%", padding: "80px" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "80px" }}>
          Volunteering Areas
        </h2>
        <Container>
          <Row className="justify-content-center">
            {volunteerAreas.map((area, index) => (
              <Col xs={12} md={6} lg={4} style={{ marginBlockEnd: "80px" }}>
                <VolunteerArea
                  key={index}
                  image={area.image}
                  heading={area.heading}
                  content={area.content}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
