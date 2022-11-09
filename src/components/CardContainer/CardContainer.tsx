import { useState } from "react";
import { Provider, useSelector } from 'react-redux';
import { RootState } from '../../store';
import './CardContainer.scss';
import Card from '../Card/Card';


function CardContainer(){
    const { cardOrder } = useSelector((state: RootState) => state.cards);

    const cardItems = cardOrder.map((card, index) =>
      <Card content={card} key={index} />
    );

    return(
        <section className="MemoryContainer">
            {cardItems}
        </section>
    )
}

export default CardContainer;
