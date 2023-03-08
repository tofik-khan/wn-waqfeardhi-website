import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: ${(props) => (props.align ? props.align : "initial")};
  color: ${(props) => (props.incognito ? "#949697" : "initial")};
`;

export function Paragraph({ align, incognito, children }) {
  return (
    <StyledParagraph align={align} incognito={incognito}>
      {children}
    </StyledParagraph>
  );
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

const StyledHeading2 = styled.h2`
  font-family: "Noto Serif";
  font-style: italic;
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;
  text-align: ${(props) => (props.align ? props.align : "initial")};
`;

export function Heading2({ align, children }) {
  return <StyledHeading2 align={align}>{children}</StyledHeading2>;
}

const StyledHeading3 = styled.h3`
  font-family: "Lora";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  text-align: ${(props) => (props.align ? props.align : "initial")};
  text-decoration: underline #607eeb 3px;
`;

export function Heading3({ align, children }) {
  return <StyledHeading3 align={align}>{children}</StyledHeading3>;
}
