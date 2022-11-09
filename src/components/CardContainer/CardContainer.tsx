import { useEffect } from "react";
import { Provider, useSelector } from 'react-redux';
import { RootState } from '../../store';
import './CardContainer.scss';
import Card from '../Card/Card';

function CardContainer(){
    const { cardOrder, selectedCards } = useSelector((state: RootState) => state.cards);

    useEffect(() => {
        // console.log('selectedCards', selectedCards);
    });

    const cardItems = cardOrder.map((card, index) =>
        <Card cardName={card} key={index} cardId={index} />
    );

    return(
        <section className="MemoryContainer">
            {cardItems}
        </section>
    )
}

export default CardContainer;
