import React from "react"
import Formulario from "./Formulario"



const NuevoProducto = (props) =>{

    const saveDataHandler = (newProducto) => {
        const productoData = {
            ...newProducto,
            id: Math.random().toString()
        }

        props.onAddProducto (productoData)
    }


    return (
        <div className="nuevoProducto">
            <Formulario onSaveData ={saveDataHandler} />
        </div>
    )
}

export default NuevoProducto