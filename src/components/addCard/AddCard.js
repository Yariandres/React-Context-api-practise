import React, { useState, useContext } from 'react';
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

    const weatherData = await fetchWeatherData();

    // console.log(wheatherData);

    addCard({
      id: weatherData.id,
      city: weatherData.name,
      temp_min: weatherData.main.temp_min,
      temp_max: weatherData.main.temp_max,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity
    });

    setQuery('');
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