import React from 'react';
import { Heading } from '../heading/Heading';
import { Cards } from '../cards/Cards';
import { AddCard } from '../addCard/AddCard';

export const Home = () => {
  return (
    <div>
      <Heading />
      <Cards />
      <AddCard />
    </div>
  )
}
