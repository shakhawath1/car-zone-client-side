import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='fw-bold' href="/">
                    <img className='w-25' src={logo} alt="" />
                    CarZone
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about">About me</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="manage-item">Manage Items</Nav.Link>
                        <Nav.Link as={Link} to="add-car">Add Car</Nav.Link>
                        <Nav.Link as={Link} to="about">My Car</Nav.Link>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;