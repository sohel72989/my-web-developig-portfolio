import React from 'react';
import './ProjectDetail.css';
import { Col, Image, Row,Button } from 'react-bootstrap';
import image1 from '../../../../img/Project-2/Header.png';
import image2 from '../../../../img/Project-2/Packages.png';
import image3 from '../../../../img/Project-2/PackageDetails.png';
import image4 from '../../../../img/Project-2/Feature.png';
import image5 from '../../../../img/Project-2/MyPackages.png';
import image6 from '../../../../img/Project-2/AllPackages.png';
import image7 from '../../../../img/Project-2/AboutUs.png';
import image8 from '../../../../img/Project-2/Footer.png';


const ProjectDetailTwo = () => {
    return (
        <div className="contains">
            <h2 className="text-center m-5">Details Of Project</h2>
            <Row className="m-2">
                <Col xs={12} md={8} lg={6} className="p-4">
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
                    </ul>
                </Col>
                <Col xs={12} md={8} lg={6} className="p-4"><ul>
                
                <li>Netlify Deploy and live Hosting. </li>
                <li>
                  Technology uses: HTML5, CSS Bootstrap, React JS, Node JS,
                  MongoDB,
                </li>
              </ul></Col>
            
                <Col xs={12} md={8} lg={6}>
                    <Image src={image1} fluid />
                    <li className="p-3">This Is the Header of TourPlan BD.
                        This section has use in navBar and Carousel.
                    </li>
                    <Image src={image3} fluid />
                    <li className="p-3">This Is the Packages of TourPlan BD.
                        This section has use in dynamic card.img,name,price,description and Booking button.
                    </li>
                    <Image src={image5} fluid />
                    <li className="p-3">This Is the user Dashboard of YourPlan BD. In this section user can see the Booking list.
                    </li>
                    <Image src={image7} fluid />
                    <li className="p-3">This Is the Admin About information of TourPlan BD. In this section Admin speech information.
                    </li>
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <Image src={image2} fluid />
                    <li className="p-3">This Is the Header of LogIn Page.
                        This section has use in Firebase Authentication with email/password and google  gmail.
                    </li>
                    <Image src={image4} fluid />
                    <li className="p-3">In this section user Booking pages. user can see list of packages and click Booking button and see the Confirm Booking. Its Uses by dynamic card and Place order. package details, user fill form with information and confirm Booking. 
                    </li>
                    <Image src={image6} fluid />
                    <li className="p-3">This section user  give feedback his own comment and rating us ..that is shown of home pages.  
                    </li>
                    <Image src={image8} fluid />
                    <li className="p-3">This section has been arrival new partner of TourPlan BD. 
                    </li>
                </Col>
            </Row>
            <Row xs={12} md={8} lg={6} className="m-2">
                    <h5> Check Live Site:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/TourPlanBd-ClientSite"
                  className="blue text "
                >
                  OPEN LIVE
                </Button>
    
        
                <h5 >Check Client Code:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/TourPlanBd-ClientSite"
                  className="blue text "
                >
                  SEE CODE
                    </Button>
                    <h5 > Check Server Code:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/TourPlanBd-ServerSite"
                  className="blue text "
                >
                  SEE CODE
                </Button>
            </Row>
        </div>
    );
};

export default ProjectDetailTwo;