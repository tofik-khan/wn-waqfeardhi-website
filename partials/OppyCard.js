import Image from "next/image";
import styled from "styled-components";
import { Heading3, Paragraph } from "../components/Text";

const StyledIconContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  height: 60px;
`;

const StyledHeadingContainer = styled(Heading3)`
  margin-bottom: 20px;
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
      <StyledHeadingContainer align={"center"}>
        {heading}
      </StyledHeadingContainer>
      <Paragraph align={"center"}>{content}</Paragraph>
    </>
  );
}
