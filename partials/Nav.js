import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import WNlogomark from "/public/images/wn-logo.png";
import TAQWAlogomark from "/public/images/taqwa-logomark.png";
import Button from "../components/Button";

const StyledNavBar = styled(Navbar)`
  background-color: #6a0136;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledSpacer = styled.div`
  margin-bottom: 140px;
`;

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledNavBar fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={WNlogomark} width={100} />
            <Image
              src={TAQWAlogomark}
              width={200}
              style={{
                borderLeft: "1px solid darkgray",
                padding: "5px",
                marginLeft: "10px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end align-items-center">
            <Nav>
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
              <Nav.Link href="/listings" className="align-items-center">
                <Button variant="primary" size="small">
                  Projects
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
