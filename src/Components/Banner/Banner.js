import React from 'react';
import banner1 from './../../image/banner1.jpg';
import banner2 from './../../image/banner2.jpg';
import banner3 from './../../image/banner3.jpg';

import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={banner1} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="text-danger h1">Himalaya Nepal</h5>
                    <p>The Himalayan nation of Nepal boasts jaw-dropping mountain scenery and a vibrant culture to match. Wander the lively streets of Kathmandu</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={banner2} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="text-danger h1">Bali is unique, Bali is unmatched</h5>
                    <p>There is no other place like Bali in this world. A magical blend of culture, people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={banner3} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="text-danger h1">Beautiful Maldives</h5>
                    <p className="text-dark">The Maldives consists of the most beautiful beaches in the world. The Islands in the Maldives have white and fine quality.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Banner;