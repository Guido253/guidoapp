import React from 'react';
import BebidasCards from './BebidasCards';



function BebidasCardlist (props) {
    return (
        <div className='Cardlist'>
            {props.cards.map((card)=> (
                <BebidasCards
                    title = {card.title} 
                    id = {card.id}
                    definicion = {card.definicion}
                    img = {card.img} />
            ))}
        </div>

    );
}

export default BebidasCardlist