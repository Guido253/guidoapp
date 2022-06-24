import React from 'react';
import './Navbar.css';
import foto from '../assets/img/foto.png';
import CartWidget from './CartWidget';



function Navbar() {
  return (
    <header>
      <nav className='navbar1'>
      <img className='fotologo' src= {foto}></img>
      <ul className='navLinks1'>
        <li className='li'>
        <a className='titulo' href='#'>Tragos</a>
        </li>
        <li className='li'>
          <a className='titulo' href='#'>Comidas</a>
        </li>
        <li className='li'>
        <a className='titulo' href='#'>Cervezas Tiradas!</a> 
        </li>
        </ul>
        <a className='boton' href='#'><button>Contacto</button></a>
      <CartWidget />
        </nav>
    </header>
  );
}

export default Navbar;