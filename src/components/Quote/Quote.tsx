import React from "react";
import {OneQuote} from "types";

interface Props {
    quote: OneQuote;
}

export const Quote  = (props: Props) => {
   return (
       <div>
        <p>"{props.quote.quote}"</p>
        <p>Autor: {props.quote.author}</p>
        <p>Pochodzi z książki: {props.quote.book}</p>
    </div>
)};