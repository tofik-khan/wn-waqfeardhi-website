import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Paragraph } from "../components/Text";

const StyledFooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #19369b;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <StyledFooterContainer>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={"auto"} className="justify-content-start">
            <Paragraph color={"white"}>
              © waqfenau.us - 2023 | All Rights Reserved
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </StyledFooterContainer>
  );
}
