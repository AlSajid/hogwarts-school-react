import React from 'react';
import one from './images/hogwarts-1.jpg';
import two from './images/hogwarts-2.jpg';
import three from './images/hogwarts-3.png';

const Carousel = () => {
    return (
        <div className="container my-1 w-100 overflow-hidden" height="100px">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={one} className="d-block w-100" alt="Campus" />
                    </div>
                    <div className="carousel-item">
                        <img src={two} className="d-block w-100" alt="Campus" />
                    </div>
                    <div className="carousel-item">
                        <img src={three} className="d-block w-100" alt="Campus" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;