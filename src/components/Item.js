import React from 'react';
import './Item.css';
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount';


function Item ({articulo , definicion, Img}) {
    return (
        <Card className='body' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title>{articulo}</Card.Title>
    <Card.Text>
      {definicion}
    </Card.Text>
    <ItemCount />
  </Card.Body>
</Card>
    );
}
  
export default Item;