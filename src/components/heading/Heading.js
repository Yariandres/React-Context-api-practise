import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Logo from '../../images/images/Logo_Wolkig.png';

export const Heading = () => {
  return (
    <div>    
      <Navbar color="dark" dark expand="md">
        <img className="mr-2" src={ Logo } alt="App Logo"/>  
        <NavbarBrand href="/" className="lead">Weather Online</NavbarBrand>       
      </Navbar>
    </div>
  )
}
