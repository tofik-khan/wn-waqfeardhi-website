import styled from "styled-components";

const StyledBlockQuote = styled.blockquote`
  font-family: "Noto Serif";
  font-weight: 100;
  font-size: ${(props) => props.size || "28px"};
  max-width: ${(props) => props.maxwidth || "75ch"};
  line-height: 1.4;
  position: relative;
  margin: 0;
  padding: 1rem;

  &:before,
  &:after {
    position: absolute;
    color: #a8a8a8;
    font-size: 8rem;
    width: 4rem;
    height: 4rem;
  }

  &:before {
    content: "“";
    left: -2.5rem;
    top: -2rem;
  }

  &:after {
    content: "”";
    right: -2rem;
    bottom: 1rem;
  }
`;

const StyledCitation = styled.cite`
  line-height: 3;
  text-align: left;
`;

export default function Quote({ size, maxwidth, source, children }) {
  return (
    <>
      <StyledBlockQuote size={size} maxwidth={maxwidth}>
        {children}
      </StyledBlockQuote>
      {source && <StyledCitation>{source}</StyledCitation>}
    </>
  );
}
