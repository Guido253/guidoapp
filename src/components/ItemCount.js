import React from 'react';
import { useState } from 'react';
import {Button} from 'react-bootstrap'
import './ItemCount.css';



const ItemCount = ({onAdd}) => {
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



    const [title, setTitle] = useState (title)


    const count = () => {
        console.log (`envió al carrito ${num} productos`)
        setTitle (`Agregaste ${num} Productos al Carrito`)
    }

    return (
        <div>
            <h4>{title}</h4>
            <div className='botcar'>
            <Button onClick={() => onAdd(count)} variant="dark"> Agregar al Carrito</Button>
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