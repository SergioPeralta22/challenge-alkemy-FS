import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/' exact component={Home} />
        </BrowserRouter>
    );
}

export default App;
