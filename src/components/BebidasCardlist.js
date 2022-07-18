import React from 'react';
import BebidasCards from './BebidasCards';



function BebidasCardlist (props) {
    return (
        <div className='Cardlist'>
            {props.cards.map((card)=> (
                <BebidasCards
                    title = {card.title} 
                    definicion = {card.definicion}
                    Precio= {card.Precio}
                     />
            ))}
        </div>

    );
}

export default BebidasCardlist