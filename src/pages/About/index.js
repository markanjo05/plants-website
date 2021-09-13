import React from "react";
import { Col, Container, Row } from "reactstrap";
import signature from "../../images/signature.png";
import "./index.scss";

const About = () => {
  return (
    <div className="aboutWrapper" id="about">
      <Container className="pt-4">
        <div className="pt-5 pb-5">
          <Row className="pb-5">
            <Col
              className="d-block my-auto text-center scores"
              xs={{ size: 12, order: 2 }}
              lg={{ size: 6, order: 1 }}
            >
              <div className="mt-4 mb-4">
                <div className="text-white">
                  <h1>50</h1>
                </div>
                <div className="bg-white p-2">
                  <h2 className="mb-0">Satisfaction</h2>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <div className="text-white">
                  <h1>50</h1>
                </div>
                <div className="bg-white p-2">
                  <h2 className="mb-0">Free Delivery</h2>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <div className="text-white">
                  <h1>50</h1>
                </div>
                <div className="bg-white p-2">
                  <h2 className="mb-0">Store Locators</h2>
                </div>
              </div>
            </Col>
            <Col
              className="d-block my-auto text-white text-end"
              xs={{ size: 12, order: 1 }}
              lg={{ size: 6, order: 2 }}
            >
              <h1 className="mb-0 font-primary-override pageTitle">About Us</h1>
              <div className="d-flex justify-content-end">
                <hr className="w-50 p-1 opacity-100"></hr>
              </div>
              <p className="aboutUsMessage">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta.
              </p>
              <div>
                <img src={signature} alt="signature" className="w-25" />
                <span className="d-block">John James Doe</span>
                <span className="d-block">Owner</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
