import {useEffect, useState} from "react";
import {OneQuote} from "types";
import {QuoteElement} from "../Quote/QuoteElement";


export const QuotationsList = () => {
    const [quotationsList, setQuotationsList] = useState<OneQuote[] | null>(null)

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/quotations");
            const data = await res.json();
            setQuotationsList(data.quotationsList)
        })();
    }, []);

    if (quotationsList === null) {
        return <p>Hmmmm... Coś tu pusto...Wygląda na to, że nie dodałeś jeszcze żadnego cytatu</p>
    }

    return (
        <section className="mt-5">
            <h1>Twoje cytaty</h1>
            <QuoteElement quote={quotationsList}/>
        </section>
    )
}