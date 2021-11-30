import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
      <div className="contain p-5 mb-5">
        <h2 className="text-center pb-5"> SKILLS</h2>
        <Row className="text-center w-100">
          <Col xs={12} md={6} lg={4}>
            <><h3>
              <i class="fab fa-html5 fa-3x"></i>
            </h3>
            <h5>HTML5</h5>
            <p>this is the java Script</p></>
            <><h3>
              <i class="fab fa-bootstrap fa-3x"></i>
            </h3>
            <h5>BOOTSTRAP</h5>
            <p>this is the java Script</p></>
          </Col>
          <Col xs={12} md={6} lg={4}><><h3>
              <i class="fab fa-react fa-3x"></i>
            </h3>
            <h5>REACT</h5>
                    <p>this is the java Script</p></>
                    <><h3>
              <i class="fab fa-java fa-3x"></i>
            </h3>
            <h5>Java</h5>
            <p>this is the java Script</p></>
            </Col>
          <Col xs={12} md={6} lg={4}><><h3>
              <i class="fab fa-node-js fa-3x"></i>
            </h3>
            <h5>NODE JS</h5>
                    <p>this is the java Script</p></>
                    <><h3>
              <i class="fab fa-python fa-3x"></i>
            </h3>
            <h5>python</h5>
            <p>this is the java Script</p></>
            </Col>
        </Row>
      </div>
    );
};

export default Skills;