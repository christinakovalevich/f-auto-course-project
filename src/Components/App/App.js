import React from 'react';

import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";

const app = {
    name: 'F-AUTO'
};

function App() {
    return (
        <div className="App">
            <Header app={app}/>
            <SearchPanel/>
        </div>
    );
}

export default App;
