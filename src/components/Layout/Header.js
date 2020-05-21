import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <header style = {headerStyle}>
            <h1>To do List</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle}  to='/about'>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAling: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header