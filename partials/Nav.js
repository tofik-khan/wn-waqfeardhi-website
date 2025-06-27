import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import WNlogomark from "/public/images/wn-logo.png";
import TAQWAlogomark from "/public/images/taqwa-logomark.png";
import Button from "../components/Button";

const StyledNavBar = styled(Navbar)`
  background-color: #f4f6f8;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledSpacer = styled.div`
  margin-bottom: 70px;
`;

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledNavBar fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
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
