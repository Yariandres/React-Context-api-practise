import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import Logo from '../../images/images/Logo_Wolkig.png';

export const Nav = () => {
  return (
    <div>    
      <Navbar color="dark" dark expand="md">
        <img className="mr-2" src={ Logo } alt="App Logo"/>  
        <NavbarBrand href="/" className="lead">Weather Online</NavbarBrand>       
      </Navbar>

      <Container className="mt-5">
        <span className="dashboard-text lead font-weight-light" >Dashboard</span> / 
        <span className="dashboard-text lead font-weight-light"> Details page</span>
      </Container>
    </div>
  )
}
