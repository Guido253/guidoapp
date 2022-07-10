import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Bebidas from './components/Bebidas';
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
       <Navbar />
        <Routes> 
          <Route path="/" element= {<ItemListContainer />}> </Route>
          <Route path="/bebidas" element= {<Bebidas />}></Route>
          <Route path="/ofertas" element= {<ContainerDetails />}></Route>
          <Route path= "*" element = {<NotFound />}></Route>
        </Routes>

      <NuevoProducto onAddProducto={addProductoHandler}/>
        
    </div>
  );
}

export default App;
