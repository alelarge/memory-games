import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectCard } from '../../features/cards/cardsSlice';
import './Card.scss';

type CardProps = {
    card: {
        id: number;
        visible: boolean;
        number: number;
    }
}

function Card(props: CardProps){
    const dispatch = useDispatch();

    return(
        <div onClick={() => { dispatch(selectCard(props.card.id)) }} className="MemoryCard">
            <div className={"MemoryCard__inner " + (props.card.visible ? 'visible' : 'hidden')}>
                <div className="MemoryCard__inner__front">
                </div>
                <div className="MemoryCard__inner__back" style={{backgroundImage: `url(/images/${props.card.number}.png`}}>
                </div>
            </div>
        </div>
    )
}

export default Card;
