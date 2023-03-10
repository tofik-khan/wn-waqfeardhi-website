import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logomark from "/public/images/wn-logomark.png";
import Button from "../components/Button";

const StyledNavBar = styled(Navbar)`
  background-color: #19369b;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledSpacer = styled.div`
  margin-bottom: 100px;
`;

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledNavBar fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logomark} width={250} />
          </Navbar.Brand>
          <Navbar.Toggle>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end align-items-center">
            <Nav>
              <Nav.Link href="/listings" className="d-flex align-items-center">
                Projects
              </Nav.Link>
              <Nav.Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeHrX5G_aHNlpF8TQqBxU8L19CmHV9s2K_OKZUMm-jnJjz04A/viewform?pli=1"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
              >
                <Button variant="primary" size="small">
                  Sponsor
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavBar>
      <StyledSpacer />
    </>
  );
};
