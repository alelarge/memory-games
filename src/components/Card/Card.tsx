import { useState } from "react";
import { useDispatch } from 'react-redux';
import { selectCard } from '../../features/cards/cardsSlice';
import './Card.scss';

type CardProps = {
    cardName: number;
    cardId: number;
}

function Card(props: CardProps){
    const dispatch = useDispatch();
    return(
        <div onClick={() => { dispatch(selectCard(props.cardId)) }} className="MemoryCard">
            <div className="MemoryCard__inner">
                <div className="MemoryCard__inner__front">
                </div>
                <div className="MemoryCard__inner__back" style={{backgroundImage: `url(/images/${props.cardName}.png`}}>
                </div>
            </div>
        </div>
    )
}

export default Card;
