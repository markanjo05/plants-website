import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Row,
} from "reactstrap";
import homeImg from "../../images/gyufyufyu.png";
import logo from "../../images/logo.png";
import { ScrollspyNavLink } from "reactstrap-scrollspy";
import "./index.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const changeBackground = () => {
    setIsOnTop(!(window.scrollY > 5));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => changeBackground());
  }, []);

  return (
    <>
      <div className="homeWrapper" id="home">
        <Navbar
          expand="lg"
          className={!isOnTop || isOpen ? "scrolledNavBar" : ""}
          fixed="top"
          light
        >
          <Container className="pt-2 pb-2 justify-content-between">
            <NavbarBrand href="#home" className="me-0 w-25">
              <img src={logo} alt="logo.png" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem className="ms-3 me-3" onClick={() => setIsOpen(false)}>
                  <ScrollspyNavLink name="home">
                    <NavLink href="#home">HOME</NavLink>
                  </ScrollspyNavLink>
                </NavItem>
                <NavItem className="ms-3 me-3" onClick={() => setIsOpen(false)}>
                  <ScrollspyNavLink name="plants">
                    <NavLink href="#plants">PLANTS</NavLink>
                  </ScrollspyNavLink>
                </NavItem>
                <NavItem className="ms-3 me-3" onClick={() => setIsOpen(false)}>
                  <ScrollspyNavLink name="about">
                    <NavLink href="#about">ABOUT</NavLink>
                  </ScrollspyNavLink>
                </NavItem>
                <NavItem className="ms-3 me-3" onClick={() => setIsOpen(false)}>
                  <ScrollspyNavLink name="photoGallery">
                    <NavLink href="#photoGallery">GALLERY</NavLink>
                  </ScrollspyNavLink>
                </NavItem>
                <NavItem className="ms-3 me-3" onClick={() => setIsOpen(false)}>
                  <ScrollspyNavLink name="contactUs">
                    <NavLink href="#contactUs">CONTACT</NavLink>
                  </ScrollspyNavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Container className="pt-5">
          <div className="pt-5 pb-5 homeBanner">
            <Row className="pb-5">
              <Col
                className="d-block my-auto"
                xs={{ size: 12, order: 2 }}
                lg={{ size: 6, order: 1 }}
              >
                <h1 className="fc-primary">Welcome To</h1>
                <h1>Greeno Plants</h1>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <Row className="mt-5 d-md-none">
                  <Col className="mb-3">
                    <Button
                      color="primary"
                      className="me-3 blackButton p-2 rounded-0 text-white w-100"
                      href="#about"
                    >
                      About
                    </Button>
                  </Col>
                  <Col className="mb-3">
                    <Button
                      color="primary"
                      className="blackButton p-2 rounded-0 text-white w-100"
                      href="#contactUs"
                    >
                      Contact Us
                    </Button>
                  </Col>
                </Row>
                <div className="mt-4 d-none d-md-block">
                  <Button
                    color="primary"
                    className="me-3 blackButton p-2 rounded-0 text-white"
                    href="#about"
                  >
                    About
                  </Button>
                  <Button
                    color="primary"
                    className="blackButton p-2 rounded-0 text-white"
                    href="#contactUs"
                  >
                    Contact Us
                  </Button>
                </div>
              </Col>
              <Col
                className="d-block my-auto"
                xs={{ size: 12, order: 1 }}
                lg={{ size: 6, order: 2 }}
              >
                <img
                  src={homeImg}
                  alt="gyufyufyu.png"
                  className="d-block mx-auto w-100 p-5 d-none d-lg-block"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
