import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: ${(props) => (props.align ? props.align : "initial")};
`;

export function Paragraph({ align, children }) {
  return <StyledParagraph align={align}>{children}</StyledParagraph>;
}

const StyledHeading1 = styled.h1`
  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 24px;
  text-align: ${(props) => (props.align ? props.align : "initial")};
`;

export function Heading1({ align, children }) {
  return <StyledHeading1 align={align}>{children}</StyledHeading1>;
}