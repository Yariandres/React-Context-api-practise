import React from 'react';
import { AddCard } from '../addCard/AddCard';
import { Link } from 'react-router-dom';

import { 
  Card, 
  Row, 
  Col, 
  Container, 
  CardTitle
} from 'reactstrap';

import "./cards.css";
import Logo from '../../images/images/Gewitter.png';

export const Cards = () => {

  const dayBuilder = d => {
    let days = [
      'Sunday', 
      'Monday', 
      'Teusday', 
      'Wednesday', 
      'Thursday', 
      'Friday', 
      'Saturday'];

    let day = days[d.getDay()];      
    return `${day}`;
  }

  return (
    <Container>
      <section className="cards-list mt-5">
        <h4 className="mt-5 dashboard-text font-weight-light">Dashboard</h4>
        <Row>     
          <Col sm="6" md="4">
            
              <Card body>
                <Link to="/details/:id/1" className="card-link">         
                  <CardTitle className="text-center card-text">London</CardTitle>
                  <Row>
                    <Col className="text-center">              
                      <img className="mt-4 " src={ Logo } alt=""/>
                    </Col>

                    <Col>                
                      <p className="card-text text-day">
                          { dayBuilder(new Date()) } 
                        <small> 10/10/2020</small>
                      </p>

                      <hr/>
                      <p className="card-text mt-2">4°c/14°c</p>
                      <p className="card-text">Clouds</p>
                      <p className="card-text">20% Rain</p>                
                    </Col> 
                  </Row>
                </Link> 
              </Card>            
          </Col>

          <Col sm="6" md="4">  
            <Card body>            
              <AddCard />
            </Card>
          </Col>
        </Row>        
      </section>
      
  
    </Container>
  )
}
