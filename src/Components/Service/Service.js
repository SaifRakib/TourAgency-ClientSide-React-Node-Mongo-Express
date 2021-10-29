import React from 'react';
import './Service.css';
import service1 from './../../image/service1.jpg';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,title,days,place,money,description} = props.service;
    return (
        <div className="service">
            
            <div className="card">
                    <img className="card-img-top img-fluid w-100" src={service1} alt="Card cap" />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="services-info">
                        <p><i className="fas fa-calendar-week"></i>{days}</p>
                        <p><i className="fas fa-map-marker-alt"></i>{place}</p>
                    </div>
                    <p>{description}</p>
                    <div className="service-price text-center">
                        <h5>BDT {money} <small>/person</small></h5>
                    </div>
                    </div>
                    <div className="text-center">
                    <Link to={`/services/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
                    </div>
                </div>
        </div>
    );
};

export default Service;