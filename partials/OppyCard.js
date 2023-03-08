import Image from "next/image";
import styled from "styled-components";
import { Heading3, Paragraph } from "../components/Text";

const StyledIconContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  height: 60px;
`;

const StyledSpacer = styled.div`
  height: 20px;
`;

export default function OpportunityCard({ image, heading, content }) {
  return (
    <>
      <StyledIconContainer>
        <Image
          src={image}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </StyledIconContainer>
      <Heading3 align={"center"}>{heading}</Heading3>
      <StyledSpacer />
      <Paragraph align={"center"}>{content}</Paragraph>
    </>
  );
}
