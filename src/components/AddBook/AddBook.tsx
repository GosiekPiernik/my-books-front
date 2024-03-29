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
            <button className="btn btn-primary" onClick={() => setResult(null)}>Dodaj kolejną ksiażkę</button>

        </div>
    }
    return <form onSubmit={sendForm}>
        <div>
            <h2>Dodaj książkę do swojej biblioteczki</h2>
            <p>
                <label className="form-label">Tytuł książki
                    <br/>
                </label>
                <input className="form-control"
                       type="text"
                       value={book.title}
                       onChange={event => updateBook('title', event.target.value)}
                       required/>
            </p>
            <p>
                <label className="form-label">Autor (główny autor)
                    <br/>
                </label>
                <input className="form-control"
                       type="text"
                       value={book.mainAuthor}
                       onChange={event => updateBook('mainAuthor', event.target.value)}
                       required/>
            </p>
            <p>
                <label className="form-label">Rok wydania ksiązki
                    <br/>
                </label>
                <input className="form-control"
                       type="number"
                       max="2023"
                       value={book.publishedDate}
                       onChange={event => updateBook('publishedDate', event.target.value)}
                       required/>
            </p>
            <p>
                <label className="form-label">Numer ISBN
                    <br/>
                </label>
                <input className="form-control"
                       type="number"
                       value={book.ISBNNumber}
                       minLength={13}
                       maxLength={13}
                       onChange={event => updateBook('ISBNNumber', event.target.value)}
                       required/>
            </p>
            <p>
                <label className="form-label">Gatunek dominujący
                    <br/>
                </label>
                <input className="form-control"
                       type="text"
                       value={book.type}
                       onChange={event => updateBook('type', event.target.value)}
                       required/>
            </p>
            <p>
                <label className="form-label">Rok, w którym przeczytałaś(-łeś) tę książkę
                    <br/>
                </label>
                <input className="form-control"
                       type="date"
                       value={book.dateOfReading.toString()}
                       onChange={event => updateBook('dateOfReading', event.target.value)}/>
            </p>
            <p>
                <label className="form-label">Ocena książki w skali 1-5 (gdzie 1-do kitu, 5-ekstra!)
                    <br/>
                </label>
                <input className="form-control"
                       type="number" min="1" max="5"
                       value={book.opinion}
                       onChange={event => updateBook('opinion', event.target.value)}
                       required/>
            </p>

            <button className="btn btn-primary" type="submit">Dodaj książkę</button>
        </div>
    </form>
}