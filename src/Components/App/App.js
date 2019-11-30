import React from 'react';
import 'bootstrap'

import './App.css';

import Header from "../Header";

const app = {
    name: 'F-AUTO'
};

function App() {
    return (
        <div className="App">
            <Header app={app}/>
        </div>
    );
}

export default App;
