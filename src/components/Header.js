import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className='menu'>
                <h1><Link to='/'>GetPokemon</Link></h1>
            </nav>
        </header>
    )
}

export default Header;