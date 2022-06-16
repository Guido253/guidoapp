import './Navbar.css';
import foto from '../assets/img/foto.png';


function Navbar() {
  return (
    <header>
      <nav className='navbar'>
      <img className='fotologo' src= {foto}></img>
      <ul className='navLinks'>
        <li>
        <a href='http://localhost:3000/'>Tragos</a>
        </li>
        <li>
          <a href='http://localhost:3000/'>Comidas</a>
        </li>
        <li>
        <a href='http://localhost:3000/'>Cervezas</a> 
        </li>
        </ul>
        <a className='boton' href='#'><button>Contacto</button></a>
        </nav>
    </header>
  );
}

export default Navbar;