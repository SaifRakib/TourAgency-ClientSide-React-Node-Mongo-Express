import React from 'react';
import './Services.css';
import service1 from './../../image/service1.jpg';
import service2 from './../../image/service2.jpg';
import service3 from './../../image/service3.jpg';
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <div className="container services">
            <div className="card-deck my-5">
                <div className="card">
                    <img className="card-img-top img-fluid w-100" src={service1} alt="Card cap" />
                    <div className="card-body">
                    <h5 className="card-title">Cox's Bazar - Never Ending Sea beach</h5>
                    <div className="services-info">
                        <p><i className="fas fa-calendar-week"></i>3 days</p>
                        <p><i className="fas fa-map-marker-alt"></i>Cox's Bazar, Bangladesh</p>
                    </div>
                    <p>Cox's bazar is a leargest sea beach in the world. You can find peace here. It a most beautifuk place in Bangladesh</p>
                    <div className="service-price text-center">
                        <h5>BDT 5500 <small>/person</small></h5>
                    </div>
                    </div>
                    <div className="text-center">
                        <button>See More</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top img-fluid w-100" src={service1} alt="Card cap" />
                    <div className="card-body">
                    <h5 className="card-title">Cox's Bazar - Never Ending Sea beach</h5>
                    <div className="services-info">
                        <p><i className="fas fa-calendar-week"></i>3 days</p>
                        <p><i className="fas fa-map-marker-alt"></i>Cox's Bazar, Bangladesh</p>
                    </div>
                    <p>Cox's bazar is a leargest sea beach in the world. You can find peace here. It a most beautifuk place in Bangladesh</p>
                    <div className="service-price text-center">
                        <h5>BDT 5500 <small>/person</small></h5>
                    </div>
                    </div>
                    <div className="text-center">
                    <button>See More</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top img-fluid w-100" src={service1} alt="Card cap" />
                    <div className="card-body">
                    <h5 className="card-title">Cox's Bazar - Never Ending Sea beach</h5>
                    <div className="services-info">
                        <p><i className="fas fa-calendar-week"></i>3 days</p>
                        <p><i className="fas fa-map-marker-alt"></i>Cox's Bazar, Bangladesh</p>
                    </div>
                    <p>Cox's bazar is a leargest sea beach in the world. You can find peace here. It a most beautifuk place in Bangladesh</p>
                    <div className="service-price text-center">
                        <h5>BDT 5500 <small>/person</small></h5>
                    </div>
                    </div>
                    <div className="text-center">
                    <button>See More</button>
                    </div>
                </div>
              
               
            </div>
        </div>
    );
};

export default Services;