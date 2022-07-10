import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';
import {Card} from 'react-bootstrap';



function ItemDetail (props) {

    return (
        <div class="card-columns" className='detailBody'>
        <Card className='body1' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require (`../assets/img/${props.img}`)} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            ${props.precio} Descuento: ${props.descuento}
          </Card.Text>
          <ItemCount /> 
        </Card.Body>
      </Card>
      </div>
    )
}


export default ItemDetail;