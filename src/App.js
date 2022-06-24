import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='bodyapp'>
       <Navbar />
       <ItemListContainer />
       <ItemListContainer />
       
    </div>
  );
}

export default App;
