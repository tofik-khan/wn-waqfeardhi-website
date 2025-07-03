import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import WNLogo from "/public/images/wn-logo.png";

const StyledNavBar = styled(Navbar)`
  background-color: #f4f6f8;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledSpacer = styled.div`
  margin-bottom: 80px;
`;

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledNavBar fixed="top" variant="dark" expand="lg" className="">
        <Container>
          <Navbar.Brand href="/">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image alt="Waqf-e-Ardhi Logo" src={WNLogo} width={75} />
              <div>
                <h2 style={{ fontSize: "20px", lineHeight: "24px", margin: 0 }}>
                  Waqf-e-Ardhi
                </h2>
                <div className={"body2"}>By Waqf-e-Nau USA</div>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle>
            <Hamburger color="#1C252E" toggled={isOpen} toggle={setOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end align-items-center">
            <Nav>
              <Nav.Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeHrX5G_aHNlpF8TQqBxU8L19CmHV9s2K_OKZUMm-jnJjz04A/viewform?pli=1"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
                style={{
                  color: "#1C252E",
                }}
              >
                Sponsor
              </Nav.Link>
              <Nav.Link
                href="/listings"
                className="align-items-center"
                style={{
                  color: "#1C252E",
                }}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavBar>
      <StyledSpacer />
    </>
  );
};
