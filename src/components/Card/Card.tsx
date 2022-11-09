import { useState } from "react";
import './Card.scss';

type CardProps = {
    content: number;
}

function Card(props: CardProps){
    return(
        <div className="MemoryCard">
            <div className="MemoryCard__inner">
                <div className="MemoryCard__inner__front">
                </div>
                <div className="MemoryCard__inner__back" style={{backgroundImage: `url(/images/${props.content}.png`}}>
                </div>
            </div>
        </div>
    )
}

export default Card;
