import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import AboutImage from '../assets/images/about-image.png'


const AboutSection = () => {
    return (
    <div id="about-section">
     <Container>
        <Row className="mt-1 mb-2">
          <Col xs={{span:12, order:"last"}} md={{span:6, order:"first"}}>
            <div className="image_iman">
                <img src={AboutImage} className="about_img" alt="About Us" />
            </div>
          </Col>
          <Col xs={{span:12, order:"first"}} md={{span:6, order:"last"}}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                  About <span className="primary-color">Us</span>
              </h1>
              <p className="about-text fs-5 m-0">
                  Welcome to Australia's premier car rental service. With over a decade of experience, we pride ourselves on offering a diverse fleet of quality vehicles to suit every need. From compact cars for city exploration to luxury SUVs for outback adventures, we ensure your journey across Australia is comfortable and memorable. Our commitment to exceptional service and competitive rates has made us a trusted choice for both locals and tourists.
              </p>
              <div className="mt-3">
                  <a href="#" className="readmore-btn fs-5 px-3 py-2">Read More</a>
              </div>
            </div>
          </Col>
        </Row>
     </Container>
    </div>
    );
    };
    export default AboutSection;