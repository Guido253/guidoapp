import React from 'react';
import './Navbar.css';
import foto from '../assets/img/foto.png';
import CartWidget from './CartWidget';
import {Button} from 'react-bootstrap';



function Navbar() {
  return (
    <header>
      <nav className='navbar1'>
      <img className='fotologo' src= {foto}></img>
      <ul className='navLinks1'>
        <li className='li'>
        <a className='titulo' href='http://localhost:3000/'>Inicio</a>
        </li>
        <li className='li'>
          <a className='titulo' href='/comidas'>Comidas</a>
        </li>
        <li className='li'>
        <a className='titulo' href='/bebidas'>Nuestras Bebidas!</a> 
        </li>
        </ul>
        <Button variant="warning">Contacto</Button>
      <CartWidget />
        </nav>
    </header>
  );
}

export default Navbar;