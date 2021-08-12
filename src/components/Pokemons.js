import React, { useContext, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import PokemonContext from '../context/Pokemon/PokemonContext.js';
import Search from './Search';
import Loading from './Loading';

function Pokemons() {
    const pokemonContext = useContext(PokemonContext);
    const { defaultPokemons, pokemonData, results, loading } = pokemonContext;

    useEffect(() => {
        if (pokemonData == null) {
            defaultPokemons();
        }
    }, [defaultPokemons, pokemonData]);

    if (loading) {
        return (<Loading />)
    } else {
        return (
            <>
                <Search />
                <div className='cardList'>
                    {
                        results.map((item, index) => (
                            <PokemonCard key={index} name={item.name} url={item.url} />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default Pokemons;