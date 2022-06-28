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
    return (
        <div>
            <p className='numCar'>Agregaste {num} Producto</p>
            <Button onClick={sumar} variant="warning" className='botonCarrito'>Agregar al Carrito</Button>
            <Button onClick={resta} variant="dark">Quitar del Carrito</Button>
        </div>
    )
}



export default ItemCount;