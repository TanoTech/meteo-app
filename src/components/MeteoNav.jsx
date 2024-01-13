import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavStyle.css'

const MeteoNav = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(location);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Meteo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form onSubmit={handleSubmit}>
                    <FormControl 
                        type="text"
                        placeholder="Search location" 
                        className="mr-sm-2" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button type="submit">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MeteoNav;