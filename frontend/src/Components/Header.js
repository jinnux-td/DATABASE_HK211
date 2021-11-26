import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
                <Container>
                        <Navbar.Brand as={Link} to='/'>Home page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/login'><i className ='fas fa-user'></i>Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header