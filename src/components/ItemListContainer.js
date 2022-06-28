import React from 'react';

import Item from './Item';
import './ItemListContainer.css';
import cerveza from '../assets/img/cerve.jpg';
import burga from '../assets/img/burga.jpg';


function ItemListContainer (){

 
    return (
    <section className="cuerpo"> 

   
    <Item articulo='Hamburguesa' definicion='Marinada con Salsa de Soja, ajo y Laurel. Viene con Cebolla caramelizada y Tomate' Img={burga} />
    <Item articulo='Cerveza Hopson' definicion='American Amber Ale: Cerveza colorada. Con lúpulo americano y sabor a fresa' Img={cerveza}/>
    <Item articulo='Hamburguesa' definicion='Marinada con Salsa de Soja, ajo y Laurel. Viene con Cebolla caramelizada y Tomate' Img={burga}/>
    <Item articulo='Cerveza Hopson' definicion='American Amber Ale: Cerveza colorada. Con lúpulo americano y sabor a fresa' Img={cerveza}/>
    
     </section>

    );
  }
  
  export default ItemListContainer;


