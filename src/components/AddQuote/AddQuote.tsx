import React, {FormEvent, useState} from "react"
import {OneQuote} from "types";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddQuote = () => {
    const [addQuote, setAddQuote] = useState({
        quote: '',
        author: '',
        book: ''
    })

    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<null | string>(null)
    const updateQuote = (key: string, value: string) => {
        setAddQuote(addQuote => ({
            ...addQuote,
            [key]: value
        }));
    }
    const sendForm = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3001/quotations", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(addQuote)
            })
            const data: OneQuote = await res.json();
            setResult(`Nowy cytat pochodzący z książki "${data.book}" został dodany.`);
        } finally {
            setLoading(false)
        }
    }


    if (loading) {
        return <p>Proszę, poczekaj chwilę</p>
    }
    if (result !== null) {
        return <div>
            <p>{result}</p>
            <button className="btn btn-primary" onClick={() => setResult(null)}> Dodaj nowy cytat</button>
        </div>
    }

    return <form onSubmit={sendForm}>
        <h2>Dodaj nowy cytat</h2>
        <p>
            <label className="form-label">
                Treść cytatu:
            </label>
            <input className="form-control"
                   type='text'
                   minLength={3}
                   maxLength={300}
                   value={addQuote.quote}
                   onChange={event => updateQuote('quote', event.target.value)}
                   required
            />
        </p>
        <p>
            <label className="form-label">
                Autor:
            </label>
            <input className="form-control"
                   type='text'
                   minLength={3}
                   maxLength={100}
                   value={addQuote.author}
                   onChange={event => updateQuote('author', event.target.value)}
                   required
            />
        </p>
        <p>
            <label className="form-label">
                Pochodzi z książki:
            </label>
            <input className="form-control"
                   type='text'
                   minLength={3}
                   maxLength={100}
                   value={addQuote.book}
                   onChange={event => updateQuote('book', event.target.value)}
                   required
            />
        </p>
        <button type="submit" className="btn btn-primary">Dodaj cytat</button>
    </form>

}