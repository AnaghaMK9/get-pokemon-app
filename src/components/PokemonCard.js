import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../context/Pokemon/PokemonContext.js';

function PokemonCard({ name, url }) {

    const pokemonContext = useContext(PokemonContext);
    const { getStats } = pokemonContext;

    const onClick = (event) =>{
        event.preventDefault();
        getStats(url);
    }
    return (
        <div className='card'>
            <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt='' className='card__image' />
            <h3>{name.toUpperCase()}</h3>
            <button onClick={onClick}>
                <Link to='/profile'>Know More</Link>
            </button>
        </div>
    )
}

export default PokemonCard;