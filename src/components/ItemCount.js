import React from 'react';
import {Button} from 'react-bootstrap'
import { useState } from 'react';
import './ItemCount.css';


function ItemCount () {
    const [num, setNum] = useState (0);

    const sumar = () => {
        setNum (num + 1)
    }
    return (
        <div>
            <p>Agregaste {num} Producto</p>
            <Button onClick={sumar} variant="warning">Agregar al Carrito</Button>
        </div>
    )
}



export default ItemCount;