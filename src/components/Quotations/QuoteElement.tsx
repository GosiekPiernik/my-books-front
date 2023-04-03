import {OneQuote} from "types";
import React from "react";
import {Quote} from "./Quote";


interface Props {
    quote: OneQuote[];
}

export const QuoteElement = (props: Props) => (
    <div>
        {
            props.quote.map(quote => (
                <Quote quote={quote} key={quote.id}/>))
        }
    </div>
)