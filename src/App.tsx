import React from 'react';
import {BooksView} from "./views/BooksView";
import {QuotationsView} from './views/QuotationsView';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {PageNotFound} from "./views/PageNotFound";


export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/mybooks" element={<BooksView/>}/>
                <Route path="/quotations" element={<QuotationsView/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
