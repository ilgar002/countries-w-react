import React from 'react';
import errorImage from '../../images/error-message.png';
import "./Error.scss";

const Error = () => {
    return (
        < div className="error-message" >
            <h6>Oops...</h6>
            <h6>Something Went Wrong...</h6>
            <img src={errorImage} alt="Error Message" />
        </div>
    )
}

export default Error