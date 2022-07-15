import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Bebidas from './components/Bebidas';
import { CartProvider } from './components/CartContext';
import CartView from './components/CartView';
import ContainerDetails from './components/ContainerDetails';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import NuevoProducto from './components/NuevoProducto';



function App() {

  const addProductoHandler = (newProducto) => {
    console.log (newProducto)
  }

  return (
    <div className='bodyapp'>
      <CartProvider>
       <Navbar />
        <Routes> 
          <Route path="/" element= {<ItemListContainer />}> </Route>
          <Route path="/detalle" element= {<Bebidas />}></Route>
          <Route path="/ofertas" element= {<ContainerDetails />}></Route>
          <Route path="/carrito" element= {<CartView />}></Route>
          <Route path= "*" element = {<NotFound />}></Route>
        </Routes>

      <NuevoProducto onAddProducto={addProductoHandler}/>
      </CartProvider>
        
    </div>
  );
}

export default App;
