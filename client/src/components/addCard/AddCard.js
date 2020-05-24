/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { 
  Button, 
  FormGroup, 
  Input,
  Form,
  Modal, 
  ModalHeader, 
  ModalBody } from 'reactstrap';

import '././addCard.css';

const API = {
  key: '70c2438cc937f7ccb72dc8d174bfe7bb',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export const AddCard = props => {  

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

    addCard({
      id: weatherData.id,
      city: weatherData.name,
      temp_min: weatherData.main.temp_min,
      temp_max: weatherData.main.temp_max,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity
    });

    setQuery('');
    setModal(!modal);
  }

  // MODAL
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <p className="text-center popup-text lead" onClick={toggle}><span className="mr-4">+</span>  Add a city</p>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add a city</ModalHeader>
          <ModalBody>

            <Form onSubmit={onSubmit}>

              <FormGroup>
                <Input 
                  type="text"
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  required
                />
              </FormGroup>
              
            <Button color="primary" onClick={toggle}>Cancel</Button>{' '}       
            <Button type='submit' color="secondary">OK</Button>

          </Form>

        </ModalBody>
      </Modal>   
    </div>
  )
}