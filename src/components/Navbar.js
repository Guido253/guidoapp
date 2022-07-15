import React from 'react';
import './Navbar.css';
import foto from '../assets/img/foto.png';
import CartWidget from './CartWidget';
import {Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <header>
      <nav className='navbar1'>
      <img className='fotologo' src= {foto}></img>
      <ul className='navLinks1'>
        <li className='li'>
        <NavLink activeClassName='active' to='/'>Inicio</NavLink>
        </li>
        <li className='li'>
          <NavLink activeClassName='active' to='/ofertas'>Ofertas</NavLink>
        </li>
        <li className='li'>
        <NavLink activeClassName='active' to='/detalle'>Detalle</NavLink> 
        </li>
        <li className='li'>
        <NavLink activeClassName='active' to='/carrito'>Carrito</NavLink> 
        </li>
        </ul>
        <Button variant="warning">Contacto</Button>
      <CartWidget />
        </nav>
    </header>
  );
}

export default Navbar;