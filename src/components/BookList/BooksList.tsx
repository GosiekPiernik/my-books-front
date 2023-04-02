import {useEffect, useState} from 'react';
import {BooksTable} from "../BooksTable/BooksTable";
import {OneBook} from "types";
import {SpinnerElement} from "../Spinner/Spinner";


export const BooksList = () => {
    const [booksList, setBooksList] = useState<OneBook[] | null>(null);

    const refreshBookList = async () => {
        setBooksList(null);
        const res = await fetch("http://localhost:3001/mybooks");
        const data = await res.json();
        // console.log(data);
        setBooksList(data.booksList);
    };

    useEffect(() => {
        refreshBookList();
    }, []);

    if (booksList === null) {
        return <SpinnerElement/>
    }

    return <>
        <h2>Moje książki</h2>
        <BooksTable book={booksList}/>
    </>
}