import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import PokemonContext from '../context/Pokemon/PokemonContext';

function Search() {
    const pokemonContext = useContext(PokemonContext);
    const { searchPokemon } = pokemonContext;
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onClick = (event) => {
        event.preventDefault();
        searchPokemon(value);
    }

    const clearInput = () => {
        setValue('');
    }

    return (
        <div className='search'>
            <button onClick={onClick}><Link to='/profile' className='fa fa-search'></Link></button>
            <input type='text' placeholder='Search' onChange={onChange} value={value} />
            <button onClick={clearInput} className='fa fa-times'></button>
        </div>
    )
}

export default Search;