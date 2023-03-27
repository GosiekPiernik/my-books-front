import React from "react";
import {NavLink} from "react-router-dom";

export const Header  = () => {

    return (
        <>
        <h1>MOJA BIBLIOTECZKA</h1>
            Menu: <NavLink to="/mybooks"> Moje książki </NavLink> |
            <NavLink to="/quotations"> Cytaty</NavLink>
            </>
    )
}