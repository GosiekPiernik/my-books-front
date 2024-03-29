import React from "react";
import {OneBook} from "types";
import {OneBookPosition} from "./OneBookPosition";

interface Props {
    book: OneBook[];
    onChange: () => void;
}

export const BooksTable = (props: Props) => (
    <div className="table-responsive">
        <table className="table table-striped">
            <thead>
            <th>Tytuł</th>
            <th>Autor (główny autor)</th>
            <th>Rok wydania</th>
            <th>Numer ISBN</th>
            <th>Gatunek dominujący</th>
            <th>Data przeczytania książki</th>
            <th>Opinia użytkownika</th>
            <th>Dowiedz się więcej</th>
            <th>Usuń książkę</th>
            </thead>
            <tbody>
            {
                props.book.map(book => (
                    <OneBookPosition book={book} key={book.id} onChange={props.onChange}/>))
            }
            </tbody>
        </table>
    </div>
);