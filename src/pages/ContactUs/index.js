import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./index.scss";
import mapImg from "../../images/map.jpg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const handleOnClear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnClear();
    setIsOpenAlert(true);
  };

  useEffect(() => {
    if (!!isOpenAlert) {
      setTimeout(() => {
        setIsOpenAlert(false);
      }, 3000);
    }
  }, [isOpenAlert]);

  return (
    <div className="contactUsWrapper">
      <img src={mapImg} alt="map.jpg" className="w-100" />
      <Container className="pt-4 pb-5" id="contactUs">
        <div className="text-center pt-3 pb-3">
          <h1 className="font-primary-override pageTitle">Contact Us</h1>
          <hr className="w-50 m-auto mt-3 mb-3 bg-primary-override p-1 opacity-100"></hr>
          <p className="pageSubTitle">
            Demo Store, New York, United States (+71 98765348)
          </p>
        </div>
        <Row className="justify-content-center">
          <Col md="12" xl="8">
            <Form onSubmit={handleOnSubmit}>
              <FormGroup className="mb-4">
                <Label for="name" className="mb-2 formLabel">
                  Your Name
                </Label>
                <Input
                  name="name"
                  className="rounded-0 basicInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label for="email" className="mb-2 formLabel">
                  Your Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  className="rounded-0 basicInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label for="phone" className="mb-2 formLabel">
                  Your Phone No.
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  className="rounded-0 basicInput"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label for="message" className="mb-2 formLabel">
                  Your Message
                </Label>
                <Input
                  type="textarea"
                  name="message"
                  className="messageInput rounded-0"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </FormGroup>
              <Alert isOpen={isOpenAlert} className="rounded-0">
                This feature is not yet complete. But thank you for your effort!
              </Alert>
              <Row className="d-md-none">
                <Col className="mb-3">
                  <Button
                    color="secondary"
                    outline
                    className="me-3 p-2 formButton rounded-0 w-100"
                    onClick={handleOnClear}
                    type="reset"
                  >
                    Clear
                  </Button>
                </Col>
                <Col className="mb-3">
                  <Button
                    color="success"
                    className="p-2 formButton rounded-0 bg-primary-override w-100"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
              <div className="d-none d-md-block">
                <div className="w-100 d-flex justify-content-end">
                  <Button
                    color="secondary"
                    outline
                    className="me-3 p-2 formButton rounded-0 w-xs-100"
                    onClick={handleOnClear}
                    type="reset"
                  >
                    Clear
                  </Button>
                  <Button
                    color="success"
                    className="p-2 formButton rounded-0 bg-primary-override"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="footer pt-3 pb-3">
        <Container>
          <div className="text-dark text-center">
            <span className="d-block">
              <a
                href="https://markanjogalisa.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                MARK ANJO S. GALISA ©2021
              </a>{" "}
            </span>
            <span className="d-block">
              Designed By{" "}
              <a href="https://html.design/" target="_blank" rel="noreferrer">
                Free Html Templates
              </a>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
