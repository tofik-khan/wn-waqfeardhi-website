import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import styled from "styled-components";

const InfoImageContainer = styled.div`
  width: 160px;
  height: 160px;
  padding: 24px;
  border: 2px dashed ${(props) => props.color};
  border-radius: 50%;
`;

const InfoImage = styled.div`
  width: 112px;
  height: 112px;
  background: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Info = ({ image, color, value, subtitle }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <InfoImageContainer color={color}>
          <InfoImage image={image} />
        </InfoImageContainer>
        <div className="h2" style={{ textAlign: "center", marginBottom: 0 }}>
          <CountUp
            end={value}
            formattingFn={(n) =>
              n > 1000 ? `${(n / 1000).toFixed(1)}K+` : `${n}+`
            }
          />
        </div>
        <div className="body1" style={{ textAlign: "center" }}>
          {subtitle}
        </div>
      </div>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 80px;
`;

export const Infographic = () => {
  return (
    <>
      <StyledContainer>
        <Container>
          <Row className="justify-content-center">
            <Col
              xs={6}
              lg={3}
              className="d-flex justify-content-center"
              style={{ marginBottom: "16px" }}
            >
              <Info
                image={"/images/homepage/projectInfographic.svg"}
                color={"#FA541C3D"}
                value={50}
                subtitle={"Projects"}
              />
            </Col>
            <Col
              xs={6}
              lg={3}
              className="d-flex justify-content-center"
              style={{ marginBottom: "16px" }}
            >
              <Info
                image={"/images/homepage/applicationInfographic.svg"}
                color={"#00B8D93D"}
                value={450}
                subtitle={"Applications"}
              />
            </Col>
            <Col
              xs={6}
              lg={3}
              className="d-flex justify-content-center"
              style={{ marginBottom: "16px" }}
            >
              <Info
                image={"/images/homepage/sponsorsInfographic.svg"}
                color={"#FFAB003D"}
                value={25}
                subtitle={"Sponsors"}
              />
            </Col>
            <Col
              xs={6}
              lg={3}
              className="d-flex justify-content-center"
              style={{ marginBottom: "16px" }}
            >
              <Info
                image={"/images/homepage/hoursInfographic.svg"}
                color={"#22C55E3D"}
                value={2500}
                subtitle={"Hours Worked"}
              />
            </Col>
          </Row>
        </Container>
      </StyledContainer>
    </>
  );
};
