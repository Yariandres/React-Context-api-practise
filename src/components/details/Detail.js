import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
  Container, 
  Button, 
  Row,
  Col
} from 'reactstrap';

import Cloudy from '../../images/images/Bewölkt.png';
import '././details.css';

export const Detail = () => {

  const history = useHistory()

  const navigateToHome = () => {
    history.push("/");
  }

  return (
    <section className="card-main">
    <Container>
        <div className="card-details">
        <div className="section-top pt-5 ml-5">
          <Row>
            <Col xs="6">
              <h2 className="details-text">London</h2>
              <p className="details-text">Monday: 09:00</p>
              <p className="details-text">Cloudy</p>

              <div className="temp d-flex my-5">
                <img src={ Cloudy } alt="Cloudy" className="my-auto"/>
                <p className="details-text ml-4 display-4">9°C</p>
              </div>
            </Col>

            <Col xs="6">
              <p className="details-text">Precipitation 0%</p>
              <p className="details-text">Humidity: 60%</p>
              <p className="details-text">Wind: 23 km/h</p>
            </Col>
          </Row>
        </div>

        <div className="section-bottom ml-5 pb-5 mb-4">
          <Row>
            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>
            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>
            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>
            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>
            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>

            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>

            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>

            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>

            <Col xs="1">
              <div className="small-cards text-center">        
                <p className="details-text">9:00</p>
                <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                <p className="details-text">9°C</p>
                <p className="details-text">60%</p>
              </div>  
            </Col>
          </Row>
        </div>    
      </div>    
      <Button className="btn btn-default mb-4" onClick={navigateToHome}> &#60; Dashboard</Button>
    </Container>
    </section>
  )
}
