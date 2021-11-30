import React from 'react';
import './ProjectDetail.css';
import { Col, Image, Row,Button } from 'react-bootstrap';
import image1 from '../../../../img/Project-1/Header.png';
import image2 from '../../../../img/Project-1/LogIn.png';
import image3 from '../../../../img/Project-1/Product.png';
import image4 from '../../../../img/Project-1/Order.png';
import image5 from '../../../../img/Project-1/Dashboard.png';
import image6 from '../../../../img/Project-1/Testimonial.png';
import image7 from '../../../../img/Project-1/AddProduct.png';
import image8 from '../../../../img/Project-1/NewCollection.png';
import image9 from '../../../../img/Project-1/MakeAdmin.png';
import image10 from '../../../../img/Project-1/Footer.png';


const ProjectDetailOne = () => {
    return (
        <div className="contains">
            <h2 className="text-center m-5">Details Of Project</h2>
            <Row className="m-2">
                <Col xs={12} md={8} lg={6} className="p-4">
                    <ul>
                    <li>
                  In this project User can Log in with register and Order
                  Products.
                </li>
                <li>Users also view their orders on the Dashboard page.</li>
                <li>
                  Admin can Add Product, Delete product and Manage all product.
                </li>
                    </ul>
                </Col>
                <Col xs={12} md={8} lg={6} className="p-4"><ul>
                
                <li>Firebase Deploy and live Hosting.</li>
                <li>
                  Technology uses: HTML5, CSS Bootstrap, React JS, Node JS
                  ,MongoDB,
                </li>
              </ul></Col>
            
                <Col xs={12} md={8} lg={6}>
                    <Image src={image1} fluid />
                    <li className="p-3">This Is the Header of HandiCraft Jwellery.
                        This section has use in navBar and Carousel.
                    </li>
                    <Image src={image3} fluid />
                    <li className="p-3">This Is the Product of HandiCraft Jwellery.
                        This section has use in dynamic card.img,name,price,description and purchase button.
                    </li>
                    <Image src={image5} fluid />
                    <li className="p-3">This Is the Admin Dashboard of Handicraft Jwellery. In this section Admin can manage All oder list,Add Product,Make Admin And see user history.
                    </li>
                    <Image src={image7} fluid />
                    <li className="p-3">This Is the Admin Dashboard of Handicraft Jwellery. In this section Admin can Add Product with All information.
                    </li>
                    <Image src={image9} fluid />
                    <li className="p-3">This Is the Admin Pannel of HandiCraft Jwellery. Admin can Make a  new Admin.
                    </li>
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <Image src={image2} fluid />
                    <li className="p-3">This Is the Header of LogIn Page.
                        This section has use in Firebase Authentication with email/password and google  gmail.
                    </li>
                    <Image src={image4} fluid />
                    <li className="p-3">In this section user click Purchase button and see the placeOrder. Its Uses by dynamic card and Place order. product details, user fill form with information and confirm Order. 
                    </li>
                    <Image src={image6} fluid />
                    <li className="p-3">This section user  give feedback his own comment and rating us ..that is shown of home pages.  
                    </li>
                    <Image src={image8} fluid />
                    <li className="p-3">This section has been arrival new product of collection .that can see the user, update  information . 
                    </li>
                    <Image src={image10} fluid />
                    <li className="p-3">End section os HandiCraft Jwellery. This is connected to user with us, contact us and our Location.
                    </li>
                </Col>
            </Row>
            <Row xs={12} md={8} lg={6} className="m-2">
                    <h5> Check Live Site:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://handicraft-jwellery.web.app/"
                  className="blue text "
                >
                  OPEN LIVE
                </Button>
    
        
                <h5 >Check Client Code:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/HandiCraft-Jwellery-ClientSite"
                  className="blue text "
                >
                  SEE CODE
                    </Button>
                    <h5 > Check Server Code:</h5>
                    <Button
                  variant="outline-secondary"
                  target="_blank"
                  href="https://github.com/sohel72989/HandiCraft-Jwellery-ServerSite"
                  className="blue text "
                >
                  SEE CODE
                </Button>
            </Row>
        </div>
    );
};

export default ProjectDetailOne;