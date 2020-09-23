import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components'


const NavbarNavegation = () => {
    return (
        <StyledNavbar sticky="top" collapseOnSelect expand="md" variant="light">
        <StyleHomeButton href="#home">Kicz Oeste</StyleHomeButton>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Inicio</Nav.Link>
                <Nav.Link href="#">Productos</Nav.Link>
                <Nav.Link href="#pricing">Contáctanos ahora</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </StyledNavbar>
    );
};

export default NavbarNavegation;

const StyledNavbar = styled(Navbar)`
    background: #f6f6f6;
`;

const StyleHomeButton = styled(Navbar.Brand) `{
    font-weight: 600;
}`