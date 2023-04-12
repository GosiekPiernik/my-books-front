import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import library from '../../books.jpg';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <Container>
                <h1>Moja Biblioteczka</h1>
            </Container>
        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/"> Strona główna </NavbarBrand>
                    <Nav className="me-auto">
                        | <NavLink to="/mybooks" className="nav-link"> Moje książki </NavLink>
                        | <NavLink to="/addbook" className="nav-link">Dodaj książkę</NavLink>
                        | <NavLink to="/quotations" className="nav-link">Ulubione cytaty</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <section style={{ backgroundImage: `url(${library})`, height: '200px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}></section>
        </header>
    )
}