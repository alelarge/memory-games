import { useState } from "react";

type CardProps = {
    content: string;
}

function Card(props: CardProps){

    return(
    <h1>{props.content}</h1>
    )
}

export default Card;
