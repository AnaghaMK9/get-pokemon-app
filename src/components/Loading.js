import React from 'react';
import loading from '../assets/pokemonLoading.gif';

function Loading() {
    return (
        <>
            <img className='loading'
                src={loading}
                alt='Loading'  
            />
        </>
    )
}

export default Loading
