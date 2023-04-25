import styled from "styled-components";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Quote from "../components/Quote";

const StyledImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

export default function HomepageCarousel() {
  return (
    <Container className="my-2 py-5 d-none d-md-block">
      <Row className="justify-content-center">
        <Col xs={12}>
          <Carousel controls={false} interval={10000}>
            <Carousel.Item interval={15000}>
              <Container>
                <Row
                  className="justify-content-center align-items-center"
                  style={{ minHeight: "350px" }}
                >
                  <Col md={8}>
                    <Quote
                      source={
                        "Hazrat Mirza Ghulam Ahmad (A.S.) - Promised Messiah"
                      }
                    >
                      Sincerity towards others and love for humanity is a part
                      of faith. The definition of the &apos;highest moral
                      values&apos; is that sincere kindness and sympathy be
                      professed towards all humanity without any expectation of
                      reward or recompense. This is what is known as true
                      humanity… Allah the Almighty never forsakes those people
                      who hold within their hearts sincere love for humanity.
                    </Quote>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row
                  className="justify-content-center align-items-center"
                  style={{ minHeight: "350px" }}
                >
                  <Col md={8}>
                    <Quote source="Hazrat Mirza Masroor Ahmad (a.b.a.) - Khalifa-tul-Masih V">
                      Always remember that you are going there for the sake of
                      Allah with a spirit of service to mankind.
                    </Quote>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
