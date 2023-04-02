import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    return (
        <>
            <h1>MOJA BIBLIOTECZKA</h1>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/"> Strona główna </NavbarBrand>
                    <Nav className="me-auto">
                        | <NavLink to="/mybooks"> Moje książki </NavLink>
                        | <NavLink to="/addbook">Dodaj książkę</NavLink>
                        | <NavLink to="/quotations">Ulubione cytaty</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}