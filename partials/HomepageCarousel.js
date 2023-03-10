import styled from "styled-components";
import Image from "next/image";
import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import { Paragraph } from "../components/Text";

const StyledImageContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  border-radius: 8px;
`;

export default function HomepageCarousel() {
  return (
    <Container className="my-2 py-5">
      <Row>
        <Col>
          <Carousel variant="dark">
            <Carousel.Item>
              <StyledImageContainer>
                <Image
                  src={"/images/placeholder.jpeg"}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </StyledImageContainer>
              <Carousel.Caption>
                <Paragraph color="white">I am slide 1</Paragraph>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <StyledImageContainer>
                <Image
                  src={"/images/placeholder.jpeg"}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </StyledImageContainer>
              <Carousel.Caption>
                <Paragraph color="white">I am slide 2</Paragraph>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <StyledImageContainer>
                <Image
                  src={"/images/placeholder.jpeg"}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </StyledImageContainer>
              <Carousel.Caption>
                <Paragraph color="white">I am slide 3</Paragraph>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <StyledImageContainer>
                <Image
                  src={"/images/placeholder.jpeg"}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </StyledImageContainer>
              <Carousel.Caption>
                <Paragraph color="white">I am slide 4</Paragraph>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
