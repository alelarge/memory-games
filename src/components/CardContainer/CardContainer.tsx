import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { clearSelectedCards } from '../../features/cards/cardsSlice';
import './CardContainer.scss';
import Card from '../Card/Card';

function CardContainer(){
    const dispatch = useDispatch();
    const { cards } = useSelector((state: RootState) => state.cards);

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearSelectedCards())
        }, 300);
    });

    const cardItems = Object.keys(cards).map((item:string, i:number) => 
        <Card card={cards[parseInt(item)]} key={cards[parseInt(item)].id} />
    );

    return(
        <section className="MemoryContainer">
            {cardItems}
        </section>
    )
}

export default CardContainer;
