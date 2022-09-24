import React from 'react';
import './Tools.scss';
import Search from './Search/Search';
import Filter from './Filter/Filter';


const Tools = ({ setCards, requestData }) => {
    return (
        <div className="tools">
            <Search setCards={setCards} requestData={requestData} />
            <Filter setCards={setCards} requestData={requestData} />
        </div>
    )
}

export default Tools