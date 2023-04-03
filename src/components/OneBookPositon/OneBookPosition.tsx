import React from 'react';
import {OneBook} from "types";


interface Props {
    book: OneBook;
}

export const OneBookPosition = (props: Props) => (
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

    </tr>
);