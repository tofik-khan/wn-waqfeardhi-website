import Image from "next/image";
import styled from "styled-components";

const StyledIconContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  height: 60px;
`;

export default function VolunteerArea({ image, heading, content }) {
  return (
    <>
      <StyledIconContainer>
        <Image
          src={image}
          alt={heading}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </StyledIconContainer>
      <h5 style={{ textAlign: "center" }}>{heading}</h5>
      <div
        className="body1"
        style={{ textAlign: "center", maxWidth: "300px", margin: "auto" }}
      >
        {content}
      </div>
    </>
  );
}
