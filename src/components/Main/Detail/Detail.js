import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useRequest";
import "./Detail.scss";
import SkeletonDetail from '../Skeleton/SkeletonDetail/SkeletonDetail';
import Error from "../Error/Error";
import { BsArrowLeft } from "react-icons/bs";

const Detail = () => {
    const [detail, setDetail] = useState([])
    const id = useParams().id
    const { loading, errors, requestData } = useFetch()
    const navigate = useNavigate()

    useEffect(() => {
        const options = { url: `https://restcountries.com/v3.1/alpha/${id}` }
        const callback = (data) => {
            setDetail(...data)
        }
        requestData(options, callback)
    }, [id, requestData])

    function onClickBorder(code) {
        navigate(`/detailed/${code}`)
    }


    return (

        <div className="detailed">
            <button onClick={() => navigate(-1)} className="back-btn">
                <BsArrowLeft />
                Back
            </button>
            {errors ? Error :
                loading || detail.length === 0 ?
                    <SkeletonDetail />
                    :
                    <div className="detailed-data">
                        <div className="img-container">
                            <img src={detail.flags.png} alt="Flag" />
                        </div>
                        <div className="info-container">
                            <div className="row">
                                <h2 className="country-name">
                                    {detail.name.common}
                                </h2>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <h6 className="native-name">Native Name: <span className="muted">{Object.values(detail.name.nativeName)[0].common}</span></h6>
                                    <h6 className="native-name">Population: <span className="muted">{new Intl.NumberFormat().format(detail.population)}</span></h6>
                                    <h6 className="native-name">Region: <span className="muted">{detail.region}</span></h6>
                                    <h6 className="native-name">Sub Region: <span className="muted">{detail.subregion}</span></h6>
                                    <h6 className="native-name">Capital: <span className="muted">{detail.capital}</span></h6>
                                </div>
                                <div className="column">
                                    <h6 className="native-name">Top Level Domain: <span className="muted">{detail.tld}</span></h6>
                                    <h6 className="native-name">Currencies: <span className="muted">{Object.values(detail.currencies)[0].name}</span></h6>
                                    <h6 className="native-name">Languages: <span className="muted languages">{Object.values(detail.languages).toString().replace(/,/g, ', ')}</span></h6>
                                </div>
                            </div>
                            <div className="borders">
                                <span>
                                    Border Countries:
                                </span>
                                {detail.borders?.map((el, index) => <div key={index} onClick={() => onClickBorder(el)} className="border-country">{el}</div>)}
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Detail