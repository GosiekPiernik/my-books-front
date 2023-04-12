import React from 'react';
import {BooksView} from "./views/BooksView";
import {QuotationsView} from './views/QuotationsView';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {PageNotFound} from "./views/PageNotFound";
import {AddBookView} from "./views/AddBookView";
import {AboutBooks} from "./components/Books/AboutBooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from "./components/Footer/Footer";


export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <section className="container" style={{ marginBottom: '80px'}}>
                <div className="row">
                    <div className="col-12 mt-3">
                        <Routes>
                            <Route path = "/" element={<AboutBooks/>}/>
                            <Route path ="/addbook" element={<AddBookView/>}/>
                            <Route path="/mybooks" element={<BooksView/>}/>
                            <Route path="/quotations" element={<QuotationsView/>}/>
                            <Route path="*" element={<PageNotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </section>
            <Footer />
        </BrowserRouter>
    )
}

