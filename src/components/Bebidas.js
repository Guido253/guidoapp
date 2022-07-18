import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import BebidasCardlist from "./BebidasCardlist";
import './Container.css';

import { getFirestore, doc, getDoc, collection, getDocs} from 'firebase/firestore';

function Bebidas () {

    const [cardsFetch , setCardsFetch] = useState ([])

    /*const fetchCards = () => {
        fetch ('data.json')
        .then ((response) => response.json ())
        .then ((data) => setCardsFetch(data))
    }*/


    useEffect (() =>{
        const db = getFirestore();

        const ProductsRef = collection(db, "products")

        getDocs(ProductsRef).then((snapshot) => {
                setCardsFetch(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
    <div className="container1">
        {/*<Button onClick={fetchCards} variant="btn btn-lg btn-block btn-dark d-block mx-auto"> Ver Detalle</Button>*/}
        <BebidasCardlist cards = {cardsFetch} />

    </div>
    )
}

export default Bebidas