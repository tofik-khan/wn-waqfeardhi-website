import Image from "next/image";
import styled from "styled-components";

const StyledIconContainer = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  margin-right: 75px;
`;

export default function SponsorImage({ image, alt }) {
  return (
    <>
      <StyledIconContainer>
        <Image
          src={image}
          alt={alt || ""}
          sizes="(max-width: 150px)"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </StyledIconContainer>
    </>
  );
}
