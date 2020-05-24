import React, { useContext, Fragment } from 'react';
import { AddCard } from '../addCard/AddCard';
import { GlobalContext } from '../../context/GlobalState';
import City from '../city/City';

import { 
  Card, 
  Row, 
  Col, 
  Container,
} from 'reactstrap';

import "./cards.css";

export const Cards = () => {  

  const { cards } = useContext(GlobalContext);

  return (
    <Container>
      <section className="cards-list">        
        <Row>
          { cards.length ? (
            <Fragment>
              <City city={cards}/>            
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
