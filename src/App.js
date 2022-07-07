import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Bebidas from './components/Bebidas';
import ContainerDetails from './components/ContainerDetails';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';



function App() {
  return (
    <div className='bodyapp'>
       <Navbar />
        <Routes> 
          <Route path="/" element= {<ItemListContainer />}> </Route>
          <Route path="/bebidas" element= {<Bebidas />}></Route>
          <Route path="/ofertas" element= {<ContainerDetails />}></Route>
          <Route path= "*" element = {<NotFound />}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
