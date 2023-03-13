import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "../components/Card";
import Button from "../components/Button";

import {
  getData,
  TITLE,
  SUBTITLE,
  DESCRIPTION,
  SLUG,
  IMAGE,
  DURATION,
  AUDIENCE,
  PUBLISHED,
} from "./api/get-listings-data";
import { Navigation } from "../partials/Nav";
import { Heading2, Paragraph } from "../components/Text";

const StyledPorjectContainer = styled(Container)`
  background: #f4f4f4;
  padding: 40px;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-image: url(${(props) =>
    props.image ? props.image : "/images/placeholder.jpeg"});
  border-radius: 4px;

  @media only screen and (max-width: 992px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

function sanitizeProjectDescription(description) {
  const elipsis = description.length > 150 ? "..." : "";
  return description.trim().slice(0, 150) + elipsis;
}

export default function Page() {
  const listings = getData();

  return (
    <>
      <Navigation />
      <h1 className="py-5 text-center">Job Postings</h1>
      {listings.map((element) => {
        if (element[PUBLISHED] === "TRUE") {
          return (
            <StyledPorjectContainer>
              <Row className="align-items-center">
                <Col lg={6}>
                  <Heading2>{element[TITLE]}</Heading2>
                  <Paragraph incognito={true}>
                    {element[DURATION]}{" "}
                    {element[AUDIENCE] ? ` / ${element[AUDIENCE]}` : ""}
                  </Paragraph>
                  <Paragraph incognito={true}>
                    {element[SUBTITLE] ?? ""}
                  </Paragraph>
                  <Paragraph>
                    {sanitizeProjectDescription(element[DESCRIPTION])}
                  </Paragraph>
                  <Button
                    variant="primary"
                    size="large"
                    href={`/listings/${element[SLUG]}`}
                  >
                    Learn More
                  </Button>
                </Col>
                {element[IMAGE] ? (
                  <Col lg={6}>
                    <StyledImage image="https://picsum.photos/700/300"></StyledImage>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </StyledPorjectContainer>
          );
        }
      })}
      <StyledPorjectContainer>
        <Row className="align-items-center">
          <Col lg={6}>
            <Heading2>Proof Read Books of Promised Messiah</Heading2>
            <Paragraph incognito={true}>21 Days / Khuddam Only</Paragraph>
            <Paragraph incognito={true}>
              Available to Remote & In-person candidates
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante...
            </Paragraph>
            <Button variant="primary" size="large">
              Learn More
            </Button>
          </Col>
          <Col lg={6}>
            <StyledImage image="https://picsum.photos/700/300"></StyledImage>
          </Col>
        </Row>
      </StyledPorjectContainer>
    </>
  );
}
