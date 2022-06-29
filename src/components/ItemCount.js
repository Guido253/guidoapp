import React from 'react';
import {Button} from 'react-bootstrap'
import { useState } from 'react';
import './ItemCount.css';


function ItemCount () {
    const [num, setNum] = useState (0);

    const sumar = () => {
        if (num<6) {
        setNum (num + 1)
        }
        else {
           setTimeout (() => alert ("Superaste el número de productos por persona"), 2000)
           console.log ("tardó más de 2 segundos");
        }
    }

    const resta = () => {
        if (num>0) {
        setNum (num - 1)
        }
    }

    const botonCarrito = () => {
        console.log (`envió al carrito ${num} productos`)
    }

    return (
        <div>
            <div className='botcar'>
            <Button onClick={botonCarrito} variant="dark"> Agregar al Carrito</Button>
            </div>

        <div className='divBut'>
            <Button onClick={sumar} variant="warning" className='botonCarrito'>+</Button>
            <p className='numCar'>{num}</p>
            <Button onClick={resta} variant="dark">-</Button>
        </div>
        </div>

        
    )
}



export default ItemCount;