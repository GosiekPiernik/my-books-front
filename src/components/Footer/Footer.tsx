import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export const Footer = () => {
    const year:number = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container d-flex justify-content-between">
                <span>Moja biblioteczka - {year}</span>
                <span>Małgorzata Piernik</span>
            </div>
        </footer>
    )
}