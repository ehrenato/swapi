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
                    <Menu.Item name="people"></Menu.Item>
                </Link>
                <Link to='/starships'>
                    <Menu.Item name="starships"></Menu.Item>
                </Link>

            </Container>
        </Menu>
    );
}

