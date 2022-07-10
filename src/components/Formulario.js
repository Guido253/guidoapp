import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Formulario.css';



const Formulario = (props) => {

    const [newTitle, setNewTitle] = useState ("")
    const [newDefinicion, setNewDefinicion] = useState("")
    const [newPrecio, setNewPrecio] = useState ("")

    const titleHandler = (event) => {
        setNewTitle(event.target.value)
    }

    const definicionHandler = (event) => {
        setNewDefinicion(event.target.value)
    }

    const precioHandler = (event) => {
        setNewPrecio (event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()


    const newProducto = {
        title: newTitle,
        definicion: newDefinicion,
        precio: newPrecio,
    }

    props.onSaveData(newProducto)

    setNewTitle("")
    setNewDefinicion("")
    setNewPrecio ("")
}

    return (
        <form onSubmit={submitHandler}>
            <h3 className="h3form">Aceptamos tu sugerencia: Escribí tu Producto</h3>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Título</label>
            <input type='text'
            placeholder='Nuevo Título'
            value={newTitle}
            onChange={titleHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Definición</label>
            <input type='text'
            placeholder='Nueva Definicion'
            value={newDefinicion}
            onChange={definicionHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Precio</label>
            <input type='number' 
            min='0.01' 
            step='0.01'
            value={newPrecio}
            onChange={precioHandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
        <Button type='submit' variant="btn btn-lg btn-block btn-warning d-block mx-auto">Ingresar Producto</Button>
        </div>
</form>
    );
}

export default Formulario