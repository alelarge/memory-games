import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { clearSelectedCards, clear } from '../../features/cards/cardsSlice';
import { win } from '../../features/controls/controlsSlice';
import './CardContainer.scss';
import Card from '../Card/Card';

function CardContainer(){
    const dispatch = useDispatch();
    const { cards } = useSelector((state: RootState) => state.cards);

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearSelectedCards())
        }, 500);
    });

    useEffect(() => {
        let winGame = true;
        for (const property in cards) {
          if (!cards[property].visible) {
            winGame = false;
          }
        }
        if (winGame) {
            dispatch(win());
            dispatch(clear());
        }
    })

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
