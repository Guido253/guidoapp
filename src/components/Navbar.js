import './Navbar.css';



function Navbar() {
  return (
    <header>
      <nav className='navbar'>
      <img className='logo' src='./assets/img/logo.png'></img>
      <ul className='navLinks'>
        <li>
        <a href='http://localhost:3000/'>Servicios</a>
        </li>
        <li>
          <a href='http://localhost:3000/'>Proyectos</a>
        </li>
        <li>
        <a href='http://localhost:3000/'>Tienda Online!</a> 
        </li>
        </ul>
        <a className='boton' href='#'><button>Contacto</button></a>
        </nav>
    </header>
  );
}

export default Navbar;