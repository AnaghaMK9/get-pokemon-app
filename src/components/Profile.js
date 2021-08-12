import React, { useContext } from 'react';

import PokemonContext from '../context/Pokemon/PokemonContext';
import NotFound from './NotFound';

function Profile() {
    const pokemonContext = useContext(PokemonContext);
    const { stats } = pokemonContext;

    if (stats === null) {
        return (
            <NotFound />
        )
    } else {
        return (
            <div className='profile'>
                <div className='profile__image'>
                    <img src={`https://img.pokemondb.net/artwork/large/${stats.name}.jpg`} alt='' />
                    <h2>{stats.name.toUpperCase()}</h2>
                </div>
                <div className='profile__stats'>
                    <p>Height : {stats.height}</p>
                    <p>Weight : {stats.weight}</p>
                    <p>Base Experience : {stats.base_experience}</p>
                    <p>Order : {stats.order}</p>
                </div>
            </div>
        )
    }
}

export default Profile;