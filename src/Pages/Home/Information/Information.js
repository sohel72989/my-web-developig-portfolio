import React from 'react';
import { Image,Row,Col } from 'react-bootstrap';
import image from '../../../img/information/sohel_rana.jpg';
import './Information.css';


const Information = () => {
    return (
      <div className="container font">
        <div className="p-5 text-center">
          <Image src={image} roundedCircle alt="avatar" className="styled" />
          <h2 className="pt-3">Sohel Rana</h2>
          <h5 className="pb-3">MERN Stack Developer</h5>
          <a
            target="_blank"
            href="https://www.facebook.com/rana72989"
            className="p-2 text-secondary"
          >
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sohel-rana-916966147/"
            className="p-2 text-secondary"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/sohel72989"
            className="p-2 text-secondary"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
        <div className="p-5">
          <h2>Biography</h2>
          <p>
            Hi, I’m Sohel Rana.I have a Bachelor of Institute Of Science,Trade &
            Technology (ISTT) Mirpur in Dhaka. In the time, I Completed
            Programing Hero Online course with sir Jhankar Mahbub and worked at
            many Applications,Projects and other things. Aside from work, I am
            also an open-source enthusiast and have created projects that were
            listed in GitHub trending. My interests lie in solving problems
            related to large-scale distributed MERN Stack developing systems.
          </p>
          <Row>
            <Col xs={12} md={8} lg={6}>
              <h4>Interests</h4>
              <ul>
                <li>Front-End Developer</li>
                <li>Web Developer</li>
                <li>MERN Stack Developer</li>
                <li>Full Stack Developer</li>
              </ul>
            </Col>
            <Col xs={12} md={8} lg={6}>
              <h4>Education</h4>
              <p className="text-secondary">
                <h5>
                  <span className="pe-3">
                    <i class="fas fa-graduation-cap"></i>
                  </span>
                  B.Sc in Computer Science & Engineering,2021
                </h5>
                <small>
                  Institute Of Science,Trade & Technology, Mirpur,Dhaka-1216
                </small>
              </p>
              <p className="text-secondary">
                <h5>
                  <span className="pe-3">
                    <i class="fas fa-graduation-cap"></i>
                  </span>
                  HSC , 2016
                </h5>
                <small>Bhaduria School & College,Nawabganj,Dinajpur</small>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default Information;