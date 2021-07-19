import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import AppNavigation from './components/AppNavigation'

import Home from './views/Home'
import Music from './views/Music'
import About from './views/About'

function App() {
    return (
        <div className="App">
            <header>
                <AppNavigation/>
            </header>

            <main className="content">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/music" component={Music}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
