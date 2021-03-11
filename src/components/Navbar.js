import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name="Star Wars API"></Menu.Item>
                </Link>
                <Link to='/people'>
                    <Menu.Item name="personagens"></Menu.Item>
                </Link>
                <Link to='/starships'>
                    <Menu.Item name="naves"></Menu.Item>
                </Link>
                <Link to='/signin'>
                    <Menu.Item name="entrar"></Menu.Item>
                </Link>
                <Link to='/signup'>
                    <Menu.Item name="registrar"></Menu.Item>
                </Link>
                

            </Container>
        </Menu>
    );
}

