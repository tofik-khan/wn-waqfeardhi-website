import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../components/Button";
import { Heading1 } from "../components/Text";

import {
  TITLE,
  SUBTITLE,
  DESCRIPTION,
  SLUG,
  IMAGE,
  DURATION,
  AUDIENCE,
  PUBLISHED,
  SPONSOR,
} from "./api/get-listings-data";
import { Navigation } from "../partials/Nav";
import { Heading2, Paragraph } from "../components/Text";
import Footer from "../partials/Footer";
import { useState, useEffect } from "react";
import { convertToHTMLTags } from "../helpers/format-text";

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
  const [data, updateData] = useState([]);
  const [loaded, updateLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/pull-listings")
      .then((response) => response.json())
      .then((response) => updateData(response.data.reverse()));
    updateLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Heading1 className="py-5 text-center">Available Projects</Heading1>
      {data.map((element, index) => {
        if (element[PUBLISHED] === "TRUE") {
          return (
            <StyledPorjectContainer key={index}>
              <Row className="align-items-center">
                <Col lg={6}>
                  <Heading2>{element[TITLE]}</Heading2>
                  <Paragraph>{element[SPONSOR] ?? ""}</Paragraph>
                  <Paragraph incognito={true}>
                    {element[DURATION]}{" "}
                    {element[AUDIENCE] ? ` / ${element[AUDIENCE]}` : ""}
                  </Paragraph>
                  <Paragraph incognito={true}>
                    {element[SUBTITLE] ?? ""}
                  </Paragraph>
                  <Paragraph lines={3}>
                    {convertToHTMLTags(element[DESCRIPTION])}
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
                    <StyledImage image={element[IMAGE]}></StyledImage>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </StyledPorjectContainer>
          );
        }
      })}
      <Footer />
    </>
  );
}
