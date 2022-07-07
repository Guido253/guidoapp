import React from "react";
import {Card} from 'react-bootstrap';

function BebidasCards (props) {
    return (
        <div class="card-columns" className='detailBody'>
        <Card className='body1' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require (`../assets/img/${props.img}`)} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            N° ID:{props.id}
          </Card.Text>
          <Card.Text>
            Descripcion: {props.definicion}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
}

export default BebidasCards