import React from 'react';
import './ProjectDetail.css';
import { Col, Image, Row,Button } from 'react-bootstrap';
import image1 from '../../../../img/Project-3/Header.png';
import image2 from '../../../../img/Project-3/Services.png';
import image3 from '../../../../img/Project-3/Partner.png';
import image4 from '../../../../img/Project-3/Doctors.png';
import image5 from '../../../../img/Project-3/AboutDoctor.png';
import image6 from '../../../../img/Project-3/Footer.png';


const ProjectDetailThree = () => {
    return (
        <div className="contains">
            <h2 className="text-center m-5">Details Of PureDentSmile</h2>
            <Row className="m-2">
                <Col xs={12} md={8} lg={6} className="p-4">
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
                    </ul>
                </Col>
                <Col xs={12} md={8} lg={6} className="p-4"><ul>
                
                <li>Netlify Deploy and live Hosting.</li>
                <li>
                  Technology uses: HTML5, CSS Bootstrap, React JS, FakeData,
                </li>
              </ul></Col>
            
                <Col xs={12} md={8} lg={6}>
                    <Image src={image1} fluid />
                    <li className="p-3">This Is the Header of PureDentSmile .
                        This section has used in navBar and Login pages.
                    </li>
                    <Image src={image3} fluid />
                    <li className="p-3">This Is the Affiliate partner and work with us  PureDentSmile.
                        This section has use in dynamic card.img,name,description and Service button.
                    </li>
                    <Image src={image5} fluid />
                    <li className="p-3">This Is the Doctors Information pages of PureDentSmile. In this section Doctors speech their update information ,details.
                    </li>
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <Image src={image2} fluid />
                    <li className="p-3">This Is the Service of home page.
                        This section has details of services .that attach the name, image, description etc.
                    </li>
                    <Image src={image4} fluid />
                    <li className="p-3">In this section only update and available Doctors description and thei proffesional information. 
                    </li>
                    <Image src={image6} fluid />
                    <li className="p-3">This section has the ended section of PureDentSmile. This is focuses our contact us and our detail information location .  
                    </li>
                </Col>
            </Row>
            <Row xs={12} md={6} lg={6} className="m-2 text-center">
                    <h5> Check Live Site:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://dental-health-care.netlify.app/"
                  className="blue text "
                >
                  OPEN LIVE
                </Button>
    
        
                <h5 >Check Code:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/Health-Care-Related-webdsite"
                  className="blue text "
                >
                  SEE CODE
                    </Button>
            </Row>
        </div>
    );
};

export default ProjectDetailThree;