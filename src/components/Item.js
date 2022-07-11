import React, {useContext, useState} from 'react';
import { CartContext } from './CartContext';
import './Item.css';
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount';


function Item (props) {

  const { addToCart } = useContext(CartContext);

  const [purchaseCompleted, setPurchaseCompleted] = useState(false)

  const onAdd = (count) => {
    setPurchaseCompleted(true);
    addToCart(props, count);
  }


    return (
        <Card className='body' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require (`../assets/img/${props.Img}`)} />
  <Card.Body>
    <Card.Title>{props.title}: $ {props.precio}</Card.Title>
    <Card.Text>
    <h4>ID: {props.id} </h4> {props.definicion}
    </Card.Text>
    <ItemCount onAdd={onAdd}/>
  </Card.Body>
</Card>
    );
}
  
export default Item;