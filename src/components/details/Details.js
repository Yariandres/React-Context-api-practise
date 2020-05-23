import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Button, 
  Row,
  Col
} from 'reactstrap';

import Cloudy from '../../images/images/Bewölkt.png';
import '././details.css';


const API = {
  key: '70c2438cc937f7ccb72dc8d174bfe7bb',
  base: 'https://api.openweathermap.org/data/2.5/'
}

// https://api.openweathermap.org/data/2.5/forecast?q=London&appid=b73b624979a3ffaa51d0475f04bccd85

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

export class Details extends Component {

  state = {
    activeCity: []
  }

  componentDidMount = async () => {

    const city = this.props.location.state.city;

    const req = await fetch(`${API.base}forecast?q=${city}&appid=${API.key}`);

    const resp = await req.json();

    this.setState({ activeCity: resp });
  } 

  

  render() {

    const weather = this.state.activeCity;

    const convertToCelsius = (temp) => {
      return (temp - 273.15).toFixed(0);
    }

    return (
      <section className="card-main">
        <Container>
          {this.state.activeCity.length !== 0 && 
            <div className="card-details">
              <div className="section-top pt-5 ml-5">
                <Row>
                  <Col xs="6">
                    <h2 className="details-text">{weather.city.name} - <small>{weather.city.country}</small></h2>
                    <p className="details-text">{ dayBuilder(new Date())} {(weather.list[0].dt_txt).substring(10, 16)}</p>
                    <p className="details-text">{weather.list[0].weather[0].main}</p>

                    <div className="temp d-flex my-5">
                      <img src={ Cloudy } alt="Cloudy" className="my-auto"/>
                      <p className="details-text ml-4 display-4">{convertToCelsius(weather.list[0].main.temp)}°C</p>
                    </div>
                  </Col>

                  <Col xs="6">
                    <p className="details-text">Precipitation {weather.list[0].main.humidity}%</p>
                    <p className="details-text">Humidity: {weather.list[0].main.humidity}%</p>
                    <p className="details-text">Wind: {(weather.list[0].wind.speed).toFixed(0)} km/h</p>
                  </Col>
                </Row>
              </div>

              <div className="section-bottom ml-5 pb-5 mb-4">
                <Row>
                  {weather.list.slice(0, 9).map((dayForecast, index) => (
                    <Col xs="1" key={index}>
                      <div className="small-cards text-center">        
                        <p className="details-text">{(dayForecast.dt_txt).substring(10, 16)}</p>
                        <img src={ Cloudy } alt="Cloudy" className="small-card-icon mr-4"/>
                        <p className="details-text">{convertToCelsius(dayForecast.main.temp)}°C</p>
                        <p className="details-text">Rain 60%</p>
                      </div> 
                    </Col>
                  ))}            
                </Row>
              </div>            
            </div>
          }

          <Button className="btn btn-default mb-4">
            <Link className="card-link" to="/"> &#60; Dashboard</Link>           
          </Button>
          
        </Container>
        
      </section>
    );
  }
}

// const history = useHistory()

//     const navigateToHome = () => {
//       history.push("/");
// }

// onClick={navigateToHome}




