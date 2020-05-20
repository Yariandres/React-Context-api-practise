import React, { useState, useContext } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { v4 as uuid } from 'uuid';
import { 
  Button, 
  FormGroup, 
  Input,
  Form } from 'reactstrap';
import '././addCard.css';

const API = {
  key: 'b73b624979a3ffaa51d0475f04bccd85',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export const AddCard = (props) => {


  

  // const [card, setCard] = useState('');

  const { addCard } = useContext(GlobalContext);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // const history = useHistory();


  const  fetchWaetherDate = () => {
     fetch(`${API.base}forecast?q=${query}&appid=${API.key}`)
    .then(res => res.json())
    .then(result =>  {
      setWeather(result);
      setQuery('');          
      console.log(result);      
    });
  }  

  const onSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: uuid(),
      city: weather.city,   
      tempMin: "5°C / 9°C",
      description: "Clouds",
      humidity: "20% Rain"
    }

    addCard(newCard);
    fetchWaetherDate();

    // history.push('/');
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
