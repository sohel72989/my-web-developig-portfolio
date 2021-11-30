import React from "react";
import { Col, Row, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = () => {
  return (
    <div>
      <div className="container font w-100">
        <Row>
          <Col xs={12} md={8} lg={6}>
            <h2 className="ms-3">MY PROJECT</h2>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <div>
              <h5>1.Project:HandiCraft Jwellery</h5>
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://handicraft-jwellery.web.app/"
                  className="blue text "
                >
                  LiveSite
                </Button>
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/HandiCraft-Jwellery-ClientSite"
                  className="blue text "
                >
                  ClientCodeLink
                </Button>
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/HandiCraft-Jwellery-ServerSite"
                  className="blue text "
                >
                  ServerCodeLink
                </Button>
              </ButtonGroup>
              <ul>
                <li>
                  In this project User can Log in with register and Order
                  Products.
                </li>
                <li>Users also view their orders on the Dashboard page.</li>
                <li>
                  Admin can Add Product, Delete product and Manage all product.
                </li>
                <li>Firebase Deploy and live Hosting.</li>
                <li>
                  Technology uses: HTML5, CSS Bootstrap, React JS, Node JS
                  ,MongoDB,
                </li>
              </ul>
              <Link to="/projectDetailOne">
                <Button
                  variant="outline-secondary"
                  className="blue text w-100"
                >
                  Details
                </Button>
              </Link>
              <h5>2.Project: TourPlan BD</h5>
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://tourism-planbd.netlify.app/"
                  className="blue text "
                >
                  LiveSite
                </Button>
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/TourPlanBd-ClientSite"
                  className="blue text "
                >
                  ClientCodeLink
                </Button>
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/TourPlanBd-ServerSite"
                  className="blue text "
                >
                  ServerCodeLink
                </Button>
              </ButtonGroup>
              <ul>
                <li>
                  In this project, User can be Log in with register and Purchase
                  Package.
                </li>
                <li>Users also view their Package on the Dashboard page.</li>
                <li>
                  Admin can be Add Package, Delete package and Manage all
                  package.
                </li>
                <li>Netlify Deploy and live Hosting. </li>
                <li>
                  Technology uses: HTML5, CSS Bootstrap, React JS, Node JS,
                  MongoDB,
                </li>
              </ul>
              <Link to="/projectDetailTwo">
                <Button
                  variant="outline-secondary"
                  className="blue text w-100"
                >
                  Details
                </Button>
              </Link>
              <h5> 3.Project: PureDentSmile </h5>
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://dental-health-care.netlify.app/"
                  className="blue text "
                >
                  LiveSite
                </Button>
                <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/Health-Care-Related-webdsite"
                  className="blue text "
                >
                  CodeLink
                </Button>
              </ButtonGroup>
              <ul>
                <li>
                  In this project, User can be Log in with register and view
                  Dental Service Package.
                </li>
                <li>Users also view their Service. </li>
                <li>
                  Admin can be Add Service, Delete Service and Manage all
                  Service.
                </li>
                <li>Netlify Deploy and live Hosting.</li>
                <li>
                  Technology uses: HTML5, CSS Bootstrap, React JS, FakeData,
                </li>
              </ul>
              <Link to="/projectDetailThree">
                <Button
                  variant="outline-secondary"
                  className="blue text w-100"
                >
                  Details
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Project;
