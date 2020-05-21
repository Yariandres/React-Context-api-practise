import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AddCard } from '../addCard/AddCard';
import { GlobalContext } from '../../context/GlobalState'
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

  const { cards } = useContext(GlobalContext);

  return (
    <Container>
      <section className="cards-list">        
        <Row>
        {cards.length > 0 ? (
          <Fragment>
            {cards.map(card => (              
              <Col sm="4" md="4" key={card.id}>
                <Link to={"/detail/" + card.id} className="card-link">        
                  <Card body>
                    <CardTitle className="text-center card-text"><strong>{card.city}</strong></CardTitle>

                    <Row>
                      <Col sm="4"  className="text-center">              
                        <img src={ Logo } alt=""/>
                      </Col>

                      <Col sm="8">                
                        <p className="card-text text-day">{ dayBuilder(new Date())} 
                          <small> 10/10/2020</small>
                        </p>
                        <hr/>
                        <p className="card-text mt-2">
                          {card.temp_min}
                            <span>°C / </span> 
                          {card.temp_max}
                            <span>°C</span>
                        </p>
                        
                        <p className="card-text">{card.description}</p>
                        <p className="card-text">{card.humidity}% Rain</p>                
                      </Col>
                    </Row>
                  </Card>
                </Link>           
              </Col>          
            ))}
          </Fragment>
          ) : (
            <h4 className="lead">No Cards, try adding a new card.</h4>
          )}        
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
