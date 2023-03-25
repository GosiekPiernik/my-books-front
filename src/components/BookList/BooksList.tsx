import {useEffect, useState} from 'react';
import {BooksTable} from "../BooksTable/BooksTable";
import {OneBook} from "types";


export const BooksList = () => {
    const [booksList, setBooksList] = useState<OneBook | null >(null);
    useEffect ( () => {
        (async () => {

            const res = await fetch('http://localhost:3001/mybooks');
            const data = await res.json();
            console.log(data);
            setBooksList(data.booksList);
        })();
    }, []);
    if ( booksList === null) {
        return <p>Poczekaj, trwa ładowanie strony</p>
    }

    return <>
        <h1>Moje książki</h1>
        <BooksTable book={booksList}/>
        </>
}