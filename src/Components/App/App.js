import React from 'react';

import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import BenefitsPanel from "../BenefitsPanel";
import ReviewPanel from "../ReviewsPanel";

const app = {
    name: 'F-AUTO'
};

function App() {
    return (
        <div className="App">
            <Header app={app}/>
            <SearchPanel/>
            <BenefitsPanel/>
            <ReviewPanel/>
        </div>
    );
}

export default App;
