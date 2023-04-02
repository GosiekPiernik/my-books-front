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
        <td>{props.book.dateOfReading.toString()}</td>
        <td>{props.book.opinion}</td>

    </tr>
);