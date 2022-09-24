import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

const Card = ({ flag, CountryName, population, region, capital,id }) => {

    const navigate = useNavigate()
    const onClickCard=(e)=>{
        navigate(`/detailed/${id}`)
    }
    return (
        <div onClick={onClickCard} className="card">
            <div className="image-container">
                <img src={flag} alt="Flag" />
            </div>
            <div className="card-text">
                <h3 className="country-name">{CountryName}</h3>
                <div className="country-detail">
                    <h6 className="population">Population: <span className="muted">{new Intl.NumberFormat().format(population)}</span></h6>
                    <h6 className="region">Region: <span className="muted">{region}</span></h6>
                    <h6 className="capital">Capital: <span className="muted">{capital}</span></h6>
                </div>
            </div>
        </div>
    )
}

export default Card