import styled from "styled-components";

import {
  TITLE,
  SUBTITLE,
  SLUG,
  DURATION,
  AUDIENCE,
  PUBLISHED,
  SPONSOR,
  BADGE,
  IMAGE,
} from "../api/get-listings-data";
import { Navigation } from "../../partials/Nav";
import Footer from "../../partials/Footer";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Clock, GeoAlt, Person } from "react-bootstrap-icons";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import TextInput from "../../components/TextInput";

const StyledBadgeContainer = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: end;
  float: left;
  padding-right: 8px;
  padding-top: 8px;
`;

const StyledBadge = styled.div`
  height: fit-content;
  padding: 8px 12px;
  background-color: #00b8d9dd;
  color: white;
  border-radius: 8px;

  font-family: "Public Sans";
  font-weight: 500;
  font-size: 15px;
`;

const StyledImage = styled.div`
  background: url("${(prop) => prop.src}");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  border-radius: 4px;
`;

const StyledContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectCard = ({ project }) => {
  return (
    <>
      <Link
        href={`/listings/${project[SLUG]}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          style={{
            height: "100%",
            borderRadius: "16px",
          }}
        >
          <Card.Body style={{ padding: "24px" }}>
            <StyledBadgeContainer>
              {project[BADGE] && <StyledBadge>{project[BADGE]}</StyledBadge>}
            </StyledBadgeContainer>
            <StyledImage src={project[IMAGE]} />
            <h6 className="line-clamp-2" style={{ marginTop: "4px" }}>
              {project[TITLE]}
            </h6>
            <div className="body2" style={{ color: "#00B8D9" }}>
              {project[SPONSOR]}
            </div>
            <div className="body2">
              <GeoAlt />
              &nbsp; {project[SUBTITLE]}
            </div>
          </Card.Body>
          <Card.Footer
            style={{
              borderTop: "1px dashed #919EAB33",
              backgroundColor: "transparent",
              padding: "16px 24px",
            }}
          >
            <Row>
              <Col xs={6}>
                <div className="body2">
                  <Clock />
                  &nbsp; {project[DURATION]}
                </div>
              </Col>
              <Col xs={6}>
                <div className="body2">
                  <Person />
                  &nbsp; {project[AUDIENCE]}
                </div>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
};

export default function Page() {
  const [data, updateData] = useState([]);
  const [loaded, updateLoaded] = useState(false);
  const [search, updateSearch] = useState("");

  useEffect(() => {
    fetch("/api/pull-listings")
      .then((response) => response.json())
      .then((response) => updateData(response.data.reverse()))
      .then(() => updateLoaded(true));
  }, []);

  if (!loaded) {
    return (
      <>
        <Navigation />
        <StyledContainer>
          <ClipLoader
            color={"#fa541c"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </StyledContainer>
        <Footer />
      </>
    );
  }

  const filteredData =
    search !== ""
      ? data.filter((project) => JSON.stringify(project).includes(search))
      : data;

  return (
    <>
      <Navigation />
      <h2 className="py-5 text-center">Available Projects</h2>
      <Container>
        <Row>
          <Col xs="auto" style={{ display: "flex", alignItems: "center" }}>
            Search
          </Col>
          <Col>
            <TextInput
              onChange={(event) => updateSearch(event.target.value)}
              width={300}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {filteredData.map(
            (project, index) =>
              project[PUBLISHED] === "TRUE" && (
                <Col
                  lg={4}
                  md={6}
                  xs={12}
                  className="p-3"
                  key={`ProjectCard-${index}`}
                >
                  <ProjectCard project={project} />
                </Col>
              )
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
