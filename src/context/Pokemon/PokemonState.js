import React, { useReducer } from 'react';

import PokemonContext from './PokemonContext.js';
import PokemonReducer from './PokemonReducer.js';

import { ALL_POKEMONS, GET_STATS, SEARCH_POKEMON, SET_LOADING } from '../types.js';
import axios from 'axios';

function PokemonState(props) {
    const initialState = {
        pokemonData: null,
        nextURL: '',
        prevURL: '',
        loading: false,
        stats: null,
        results: []
    }

    const [state, dispatch] = useReducer(PokemonReducer, initialState);

    const setLoading = async () => {
        dispatch({
            type: SET_LOADING
        })
    }

    const defaultPokemons = async () => {
        try {
            setLoading();
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
            dispatch({
                type: ALL_POKEMONS,
                payload: res.data
            });
        } catch (err) {
            return console.log(err);
        }
    }

    const getStats = async (url) => {
        try {
            setLoading();
            const res = await axios.get(url);
            dispatch({
                type: GET_STATS,
                payload: res.data
            });
        } catch (err) {
            return console.log(err);
        }
    }

    const searchPokemon = async (name) => {
        try{
            setLoading();
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            dispatch({
                type: SEARCH_POKEMON,
                payload: res.data
            });
        }catch(err){
            return console.log(err);
        }
    }

    return (
        <PokemonContext.Provider value={{
            pokemonData: state.pokemonData,
            nextURL: state.nextURL,
            prevURL: state.prevURL,
            loading: state.loading,
            stats: state.stats,
            results:state.results,
            defaultPokemons,
            getStats,
            searchPokemon,
            setLoading
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}
export default PokemonState;