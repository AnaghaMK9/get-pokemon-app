import { ALL_POKEMONS, GET_STATS, SEARCH_POKEMON, SET_LOADING } from "../types.js";

const reducer = (state, action) => {
    switch (action.type) {
        case ALL_POKEMONS:
            return {
                ...state,
                pokemonData: action.payload,
                results: action.payload.results,
                loading: false
            }
        case GET_STATS:
            return {
                ...state,
                stats: action.payload,
                loading: false
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                stats: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return {
                state
            }
    }
}
export default reducer;