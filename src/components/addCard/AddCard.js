import React, { useState, useContext } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { 
  Button, 
  FormGroup, 
  Input,
  Form } from 'reactstrap';
import '././addCard.css';

const API = {
  key: '70c2438cc937f7ccb72dc8d174bfe7bb',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export const AddCard = () => {  

  const { addCard } = useContext(GlobalContext);

  const [query, setQuery] = useState('');

  const fetchWeatherData = async () => {
    const response = await fetch(`${API.base}weather?q=${query}&units=metric&appid=${API.key}`)

    const res = await response.json();

    return res;
  }  

  const onSubmit = async (e) => {
    e.preventDefault();

    const wheatherData = await fetchWeatherData();

    console.log(wheatherData);

    addCard({
      id: wheatherData.id,
      city: wheatherData.name,
      temp_min: wheatherData.main.temp_min,
      temp_max: wheatherData.main.temp_max,
      description: wheatherData.weather[0].description,
      humidity: wheatherData.main.humidity
    });          
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>                      
        <FormGroup>
          <Input 
            type="text"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
        </FormGroup>        
        <Button type='submit' color="secondary">OK</Button>            
      </Form>    
    </div>
  )
}

// {( typeof weather.city.name != "undefined" ) ? ( console.log(weather.city.name) ) : ('')}

// const API = {
//   key: 'b73b624979a3ffaa51d0475f04bccd85',
//   base: 'https://api.openweathermap.org/data/2.5/'
// }
