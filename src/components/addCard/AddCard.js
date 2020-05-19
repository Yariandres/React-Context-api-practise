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

export const AddCard = (props) => {

  // const [card, setCard] = useState('');
  const { addCard } = useContext(GlobalContext);

  // const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: uuid(),
      city: "London",   
      tempMin: "5°C / 9°C",
      description: "Clouds",
      humidity: "20% Rain"
    }

    addCard(newCard)
    // history.push('/');
  }

  return (
    <div>
      
      <Form onSubmit={onSubmit}>                      
        <FormGroup>
          <Input 
            type="text"
          />
        </FormGroup>
        <Button type='submit' color="secondary">OK</Button>      
      </Form>
    </div>
  )
}
