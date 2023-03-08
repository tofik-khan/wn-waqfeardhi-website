import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: ${(props) => props.align};
`;

export default function Paragraph({ align, children }) {
  return <StyledParagraph align={align}>{children}</StyledParagraph>;
}
