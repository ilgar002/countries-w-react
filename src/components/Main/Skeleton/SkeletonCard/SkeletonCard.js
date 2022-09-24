import React from 'react';
import './SkeletonCard.scss';

const Skeleton = () => {
    return (
        <div className="skeleton-card">
            <div className="image-skeleton">
            </div>
            <div className="skeleton-text">
                <div className="skeleton-name"></div>
                <div className="skeleton-detail">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton