import React from 'react';

import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import BenefitsPanel from "../BenefitsPanel";

const app = {
    name: 'F-AUTO'
};

function App() {
    return (
        <div className="App">
            <Header app={app}/>
            <SearchPanel/>
            <BenefitsPanel/>
        </div>
    );
}

export default App;
