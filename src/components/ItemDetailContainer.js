import React from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';


function ItemDetailContainer (props) {
    return (
        <div className="productos">
            {props.productos.map((producto) => (
                <ItemDetail 
                title = {producto.title}
                precio = {producto.precio}
                descuento = {producto.descuento}
                img = {producto.img}
                />
                
                ))}
   </div>
    );
}

export default ItemDetailContainer