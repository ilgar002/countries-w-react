import React from 'react';
import "./SkeletonDetail.scss";

const SkeletonDetail = () => {
    return (
        <div className="skeleton-details">
            <div className="img-container">
            </div>
            <div className="info-container">
                <div className="row">
                    <div className="m-line"></div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="s-line"></div>
                        <div className="s-line"></div>
                        <div className="s-line"></div>
                        <div className="s-line"></div>
                        <div className="s-line"></div>
                    </div>
                    <div className="column">
                        <div className="s-line"></div>
                        <div className="s-line"></div>
                        <div className="s-line"></div>
                    </div>
                </div>
                <div className="borders">
                    <div className="m-line"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonDetail