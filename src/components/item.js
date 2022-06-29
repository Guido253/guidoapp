import React from 'react';
import './Item.css';
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount';


function Item ({title , definicion, precio, Img}) {
    return (
        <Card className='body' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require (`../assets/img/${Img}`)} />
  <Card.Body>
    <Card.Title>{title}: $ {precio}</Card.Title>
    <Card.Text>
      {definicion}
    </Card.Text>
    <ItemCount />
  </Card.Body>
</Card>
    );
}
  
export default Item;