import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import './Main.scss';
import Skeleton from './Skeleton/SkeletonCard/SkeletonCard';
import Tools from './Tools/Tools';
import useFetch from "../Hooks/useRequest";
import Error from './Error/Error';
const Main = () => {
    const [cards, setCards] = useState([])

    const { loading, errors, requestData } = useFetch()


    useEffect(() => {
        const options = { url: 'https://restcountries.com/v3.1/all' }
        const callback = (data) => {
            setCards(data)
            console.log(data);
        }
        requestData(options, callback)
    }, [requestData])


    return (
        <main>
            <div className="main-content">
                <Tools setCards={setCards} requestData={requestData} />
                <div className="cards">
                    {errors ? <Error /> :
                        loading ?
                            [...Array(8)].map((el,i) => <Skeleton key={i} />)
                            :
                            cards.map((el) => {
                                return <Card
                                    key={el.cca3}
                                    id={el.cca3}
                                    flag={el.flags.png}
                                    CountryName={el.name.common}
                                    population={el.population}
                                    region={el.region}
                                    capital={el.capital}
                                />
                            })
                    }
                </div>
            </div>
        </main>
    )
}

export default Main


