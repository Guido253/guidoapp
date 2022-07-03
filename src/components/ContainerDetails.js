import React from 'react';
import './ContainerDetails.css';
import ItemDetailContainer from './ItemDetailContainer';


function ContainerDetails () {

const productosDescuentos = [

  {
    title: "Berenjenas",
    stock: 80,
    precio: 600,
    descuento: 400,
    definicion: "Berenjenas en escabeche. Marinadas previamente con Romero, Laurel, Ajo, Vinagre y Aceite",
    id: 1,
    img: "beren.jpg"
},
{ 
    title: "Cerveza Tirada",
    stock: 20,
    precio: 1200,
    descuento: 900,
    definicion: "Cerveza Tirada Hopson. American Amber Ale. Suave, Roja, dulce y de lúpulos americanos.",
    id: 2,
    img: "cerveti.jpg"
 },

 { 
  title: "Cerveza Patagonia",
  stock: 20,
  precio: 1100,
  descuento: 800,
  definicion: "Cerveza Patagonia Lamber. Indie Ale. Suave, Rubica, con un bajo toque de amargor.",
  id: 3,
  img: "hopson.png"
}

]

    return (
        <div className='divContai'>
          <h1 className='titulo1'>Conocé nuestros Productos en Oferta!!</h1>
          <ItemDetailContainer productos={productosDescuentos} />
        </div>
    );
}

export default ContainerDetails