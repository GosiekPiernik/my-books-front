import React, {MouseEvent} from 'react';
import {OneBook} from "types";


interface Props {
    book: OneBook;
    onChange: () => void;
}

export const OneBookPosition = (props: Props) => {
    const deleteBook = async (e: MouseEvent) => {
        e.preventDefault();


        if (!window.confirm(`Czy na pewno chcesz usunąć książkę ${props.book.title}?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/mybooks/${props.book.id}`, {
            method: 'DELETE',
        });

        if (res.status === 400 || res.status === 500) {
            const error = await res.json();
            alert(`Wystąpił błąd: ${error.message}`);
            return
        }

        props.onChange();
    };
    return (
        <tr>
            <td>{props.book.title}</td>
            <td>{props.book.mainAuthor}</td>
            <td>{props.book.publishedDate}</td>
            <td>{props.book.ISBNNumber}</td>
            <td>{props.book.type}</td>
            <td>
                {new Date(props.book.dateOfReading).getDate()}.
                {new Date(props.book.dateOfReading).getMonth()}.
                {new Date(props.book.dateOfReading).getFullYear()}
            </td>
            <td>{props.book.opinion}</td>
            <td><a href={`https://isbnsearch.org/isbn/${props.book.ISBNNumber}`}>Dowiedz się więcej</a></td>
            <td>
                <button type="button" className=" btn btn-outline-dark" onClick={deleteBook}>Usuń książkę</button>
            </td>

        </tr>
    )
};