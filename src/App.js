import React from 'react'
import './App.css';
import ContainerDetails from './components/ContainerDetails';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='bodyapp'>
       <Navbar />
       <ItemListContainer />
       <ContainerDetails />

    </div>
  );
}

export default App;
