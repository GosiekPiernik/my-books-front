import React from "react";
import {OneQuote} from "types";

interface Props {
    quote: OneQuote;
}

export const Quote  = (props: Props) => {
   return (
    <div className="col-12 mb-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title blockquote">{props.quote.quote}</h5>
                <p className="card-text "><em>Autor: {props.quote.author}</em></p>
                <p className="card-text"><small>Pochodzi z książki: {props.quote.book}</small></p>
            </div>
        </div>
    </div>
    //    <div>
    //     <p>"{props.quote.quote}"</p>
    //     <p>Autor: {props.quote.author}</p>
    //     <p>Pochodzi z książki: {props.quote.book}</p>
    // </div>
)};