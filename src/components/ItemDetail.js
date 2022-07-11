import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './ItemDetail.css';
import ItemCount from './ItemCount';
import {Card} from 'react-bootstrap';



function ItemDetail (props) {

  const { addToCart } = useContext(CartContext);

  const [purchaseCompleted, setPurchaseCompleted] = useState(false)

  const onAdd = (count) => {
    setPurchaseCompleted(true);
    addToCart(props, count);
  }

    return (
        <div class="card-columns" className='detailBody'>
        <Card className='body1' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require (`../assets/img/${props.img}`)} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            ${props.precio} Descuento: ${props.descuento}
          </Card.Text>
          <ItemCount onAdd={onAdd}/>
        </Card.Body>
      </Card>
      </div>
    )
}


export default ItemDetail;