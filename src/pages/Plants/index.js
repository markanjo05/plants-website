import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { plants } from "./data";
import "./index.scss";

const Plants = () => {
  return (
    <>
      <div className="plantsWrapper" id="plants">
        <Container className="pt-4 pb-5">
          <div className="text-center pt-3 pb-3">
            <h1 className="font-primary-override pageTitle">
              Our Wonderful Plants
            </h1>
            <hr className="w-50 m-auto mt-3 mb-3 bg-primary-override p-1 opacity-100"></hr>
            <p className="pageSubTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <Row>
            {plants.map((plant) => {
              return (
                <Col lg="4" md="6" className="mt-3 mb-3" key={plant.name}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={plant.imgSrc}
                      alt={plant.name}
                    />
                    <CardBody>
                      <CardTitle tag="h3">{plant.name}</CardTitle>
                      <CardText>{plant.description}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Plants;
