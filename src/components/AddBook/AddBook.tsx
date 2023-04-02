import React, {FormEvent, useState} from 'react';
import {OneBook} from "types";
import {SpinnerElement} from "../Spinner/Spinner";


export const AddBook = () => {
    const [book, setBook] = useState({
        title: '',
        mainAuthor: '',
        publishedDate: 0,
        ISBNNumber: 0,
        type: '',
        dateOfReading: Date,
        opinion: 0
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<null | string>(null)
    const updateBook = (key: string, value: any) => {
        setBook(book => ({
            ...book,
            [key]: value
        }));
    };

    const sendForm = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3001/addbook", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(book)
            });

            const data: OneBook = await res.json();
            setResult(`Książka "${data.title}" została dodana do Twojej biblioteczki`)

        } finally {
            setLoading(false)
        }
    };

    if (loading) {
        return <SpinnerElement/>;
    }

    if (result !== null) {
        return <div>
            <p>{result}</p>
            <button onClick={() => setResult(null)}>Dodaj kolejną ksiażkę</button>
        </div>
    }
    return <form onSubmit={sendForm}>
        <div>
            <h2>Dodaj książkę do swojej biblioteczki</h2>
            <p>
                <label>Tytuł książki
                    <br/>
                    <input
                        type="text"
                        value={book.title}
                        onChange={event => updateBook('title', event.target.value)}/>
                </label>
            </p>
            <p>
                <label>Autor (główny autor)
                    <br/>
                    <input
                        type="text"
                        value={book.mainAuthor}
                        onChange={event => updateBook('mainAuthor', event.target.value)}/>
                </label>
            </p>
            <p>
                <label>Rok wydania ksiązki
                    <br/>
                    <input
                        type="number"
                        value={book.publishedDate}
                        onChange={event => updateBook('publishedDate', event.target.value)}/>
                </label>
            </p>
            <p>
                <label>Numer ISBN
                    <br/>
                    <input
                        type="number"
                        value={book.ISBNNumber}
                        onChange={event => updateBook('ISBNNumber', event.target.value)}/>
                </label>
            </p>
            <p>
                <label>Gatunek dominujący
                    <br/>
                    <input
                        type="text"
                        value={book.type}
                        onChange={event => updateBook('type', event.target.value)}/>
                </label>
            </p>
            <p>
                <label>Rok, w którym przeczytałaś(-łeś) tę książkę
                    <br/>
                    <input
                        type="date"
                        value={book.dateOfReading.toString()}
                        onChange={event => updateBook('dateOfReading', event.target.value)}/>
                </label>
            </p>
            <p>
                <label>Ocena książki w skali 1-5 (gdzie 1-do kitu, 5-ekstra!)
                    <br/>
                    <input
                        type="number" max="5"
                        value={book.opinion}
                        onChange={event => updateBook('opinion', event.target.value)}/>
                </label>
            </p>

            <button type="submit">Dodaj książkę</button>
        </div>
    </form>
}