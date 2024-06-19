// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import AppPage from './components/AppPage';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/app" component={AppPage} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;