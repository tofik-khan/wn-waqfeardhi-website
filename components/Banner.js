import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.bg ? props.bg : props.variant === "dark" ? "#607EEB" : "#F8F8F8"};
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default function Banner({ variant, bg, children }) {
  return (
    <StyledContainer bg={bg} variant={variant}>
      {children}
    </StyledContainer>
  );
}
