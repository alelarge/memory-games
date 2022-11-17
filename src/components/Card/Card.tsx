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
    const { selectedCards } = useSelector((state: RootState) => state.cards);
    const { gameState } = useSelector((state: RootState) => state.controls);

    const onClick = () => {
        if (gameState === 'play' && selectedCards.length < 2) {
            dispatch(selectCard(props.card.id));
        }
    }

    return(
        <div onClick={onClick} className="MemoryCard">
            <div className={"MemoryCard__inner " + (props.card.visible ? 'visible' : '')}>
                <div className="MemoryCard__inner__front">
                </div>
                <div className="MemoryCard__inner__back" style={{backgroundImage: `url(/images/${props.card.number}.png`}}>
                </div>
            </div>
        </div>
    )
}

export default Card;
