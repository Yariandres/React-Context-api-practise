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

  console.log(cards);


  return (
    <Container>
      <section className="cards-list">        
        <Row>
        {cards.length > 0 ? (
          <Fragment>
          {cards.map(card => (              
            <Col sm="6" md="4" key={card.id}>
              <Link to={"/detail"} className="card-link">        
                <Card body>        
                    <CardTitle className="text-center card-text">{card.city}</CardTitle>
                    <Row>
                      <Col className="text-center">              
                        <img className="mt-4 " src={ Logo } alt=""/>
                      </Col>
                      <Col>                
                        <p className="card-text text-day">{ dayBuilder(new Date())} 
                          <small> 10/10/2020</small>
                        </p>
                        <hr/>
                        <p className="card-text mt-2">{card.tempMin}</p>
                        <p className="card-text">{card.description}</p>
                        <p className="card-text">{card.humidity}</p>                
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
