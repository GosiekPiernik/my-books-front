import React from 'react';
import {OneBook} from "types";

interface Props {
    book: OneBook;
}

export const OneBookPosition = (props: Props) => (
    <tr>
        <td>{props.book.id}</td>
        <td>{props.book.title}</td>
        <td>{props.book.firstAuthor}</td>
        <td>{props.book.secondAuthor}</td>
        <td>{props.book.publishedDate}</td>
        <td>{props.book.ISBNNumber}</td>
        <td>{props.book.type}</td>
        <td>{props.book.opinion}</td>
    </tr>
);