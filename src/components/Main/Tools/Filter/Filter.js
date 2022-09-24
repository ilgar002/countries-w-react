import React, { useState, useRef, useEffect } from 'react';
import "./Filter.scss";
import { FiChevronDown } from "react-icons/fi";


const Filter = ({ setCards, requestData }) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false)
    const [currentRegion, setCurrentRegion] = useState('Filter By Region')

    const dropdownRef = useRef(null)

    useEffect(() => {
        window.addEventListener('click', (e) => {
            const clickedArea = e.composedPath()
            !clickedArea.includes(dropdownRef.current) && setDropdownVisibility(false)
        })
    }, [])

    const onClickHandlerFilter = () => {
        setDropdownVisibility((prev) => !prev)
    }
    const onClickRegion = (region) => {
        if (region !== 'all') {
            requestData({ url: `https://restcountries.com/v3.1/region/${region}` }, (data) => setCards(data))
            setCurrentRegion(region.charAt(0).toUpperCase() + region.slice(1).toLowerCase())
        }
        else {
            requestData({ url: 'https://restcountries.com/v3.1/all' }, (data) => setCards(data))
            setCurrentRegion('Filter By Region')
        }
    }


    return (
        <div ref={dropdownRef} className={dropdownVisibility ? "region-filter opened" : "region-filter"}
            onClick={onClickHandlerFilter}>
            <span className="option current">{currentRegion}</span>
            <FiChevronDown className='arrow-icon' />
            <div className="options-dropdown">
                <ul>
                    <li onClick={() => onClickRegion("africa")} className="option">Africa</li>
                    <li onClick={() => onClickRegion("americas")} className="option">America</li>
                    <li onClick={() => onClickRegion("asia")} className="option">Asia</li>
                    <li onClick={() => onClickRegion("europe")} className="option">Europe</li>
                    <li onClick={() => onClickRegion("oceania")} className="option">Oceania</li>
                    {currentRegion !== 'Filter By Region' && <li onClick={() => onClickRegion("all")} className="option">All</li>}
                </ul>
            </div>
        </div>
    )
}

export default Filter