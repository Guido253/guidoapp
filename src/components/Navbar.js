import './Navbar.css';
import foto from '../assets/img/foto.png';


function Navbar() {
  return (
    <header>
      <nav className='navbar'>
      <img className='fotologo' src= {foto}></img>
      <ul className='navLinks'>
        <li>
        <a href='#'>Tragos</a>
        </li>
        <li>
          <a href='#'>Comidas</a>
        </li>
        <li>
        <a href='#'>Cervezas Tiradas!</a> 
        </li>
        </ul>
        <a className='boton' href='#'><button>Contacto</button></a>

        <div className = 'icono'> 
        <ion-icon name="cart-outline"></ion-icon>
        </div>

        </nav>
    </header>
  );
}

export default Navbar;