import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/images/Gewitter.png';

import { 
  Card, 
  Row, 
  Col, 
  CardTitle
} from 'reactstrap';

const City = props => {

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
    <Fragment>
      {props.city.map(card => (              
        <Col sm="4" md="4" key={card.id}>

          <Link className="card-link" to={{ 
            pathname: `/details/${card.id}`,
            state: { city: card.city }
          }}>
          
            <Card body>
              <CardTitle className="text-center card-text">
                <strong>{card.city}</strong>
              </CardTitle>      
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
  )
}

export default City;

