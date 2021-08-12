import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonState from './context/Pokemon/PokemonState';
import Header from './components/Header';
import Pokemons from './components/Pokemons';
import Profile from './components/Profile';

function App() {
    return (
        <PokemonState>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Pokemons}/>
                    <Route exact path='/profile' component={Profile} />
                </Switch>
            </Router>
        </PokemonState>

    )
}

export default App;