import React from "react";
import {OneBook} from "types";
import {OneBookPosition} from "../OneBookPositon/OneBookPosition";

interface Props {
    book: OneBook[];
}
export const BooksTable = (props: Props) => (

    <table>
        <thead>
            <td>Id</td>
            <td>Tytuł</td>
            <td>Autor (pierwszy autor)</td>
            <td>Autor (drugi autor)</td>
            <td>Rok wydania</td>
            <td>Gatunek dominujący</td>
            <td>Moja opinia</td>
        </thead>
        <tbody>
        {
            props.book.map (book => (
                <OneBookPosition book={book} key={book.id}/>))}
        </tbody>
    </table>
);