import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item';
import './ItemListContainer.css';



function ItemListContainer (){

  const [info , setInfo] = useState ([])

  useEffect (() => {
    fetch('data.json')
    .then ((resp) => resp.json ())
    .then ((data) => setInfo (data))

  }, [])

    return (
    <section className="cuerpo"> 
      {info.map(i => <Item title={i.title}  definicion = {i.definicion} precio ={i.precio} Img = {i.img} />)}
     </section>

    );
  }
  
  export default ItemListContainer;


