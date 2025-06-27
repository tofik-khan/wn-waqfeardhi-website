import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Paragraph } from "../components/Text";

const StyledFooterContainer = styled.div`
  width: 100%;
  padding: 64px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <StyledFooterContainer>
      <div className="caption">
        © waqfenau.us - {new Date().getFullYear()} | All Rights Reserved
      </div>
    </StyledFooterContainer>
  );
}
