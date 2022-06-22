import './App.css';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div>
       <Navbar> <CartWidget /> </Navbar>
       <ItemListContainer />
       <ItemListContainer />
       <Hello/>
    </div>
  );
}

export default App;
