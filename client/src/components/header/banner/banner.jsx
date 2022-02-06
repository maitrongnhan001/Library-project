import React from 'react';
import "./banner.scss";
import { useState } from 'react';

const Banner = () => {
    const slideImg = [
        "/image/banner/1.jpeg",
        "/image/banner/2.jpeg",
        "/image/banner/3.jpeg",
        "/image/banner/4.jpeg"
    ];

    const [currentSlide, setCurrentSlide] = useState(1);

    const updateSlide = (position) => {
        if ( !position ) {
            const TotalSlide = slideImg.length;
            const slide = currentSlide;
            if (slide > TotalSlide) {
                setCurrentSlide(slide + 1);
            } else {
                setCurrentSlide(1);
            }
        }

        if ( position <= slideImg.length ) {
            setCurrentSlide(position);
        }
    }

    return (
        <div className='banner'>
            <div className="silde">
                <img src={`${slideImg[currentSlide - 1]}`} alt={`slide-${currentSlide}`} className='img-banner' />
            </div>
            <div className="btn-switch-silde">
                <div
                    className={`check-btn ${currentSlide === 1 ? "active" : ""}`}
                    onClick={() => updateSlide(1)}
                ></div>
                <div
                    className={`check-btn ${currentSlide === 2 ? "active" : ""}`}
                    onClick={() => updateSlide(2)}
                ></div>
                <div
                    className={`check-btn ${currentSlide === 3 ? "active" : ""}`}
                    onClick={() => updateSlide(3)}
                ></div>
                <div
                    className={`check-btn ${currentSlide === 4 ? "active" : ""}`}
                    onClick={() => updateSlide(4)}
                ></div>
            </div>
        </div>
    );
}

export default Banner;
