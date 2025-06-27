import Image from "next/image";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 80px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const HeroImage = styled.div`
  width: 450px;
  height: 450px;
  background: url("/images/hero.png");
  background-size: contain;
  background-repeat: no-repeat;
  content-fit: cover;

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

export const Hero = () => {
  return (
    <>
      <StyledContainer>
        <HeroImage />
        <div>
          <h2 style={{ marginBottom: "24px" }}>Waqf-e-Ardhi</h2>
          <div class="body1" style={{ maxWidth: "600px" }}>
            “Sincerity towards others and love for humanity is a part of faith.
            The definition of the 'highest moral values' is that sincere
            kindness and sympathy be professed towards all humanity without any
            expectation of reward or recompense. This is what is known as true
            humanity… Allah the Almighty never forsakes those people who hold
            within their hearts sincere love for humanity.”
          </div>
          <div class="body1">
            <strong>Hazrat Mirza Ghulam Ahmad (A.S.) - Promised Messiah</strong>
          </div>
        </div>
      </StyledContainer>
    </>
  );
};
