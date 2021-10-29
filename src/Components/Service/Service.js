import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,title,days,place,money,img,short_desc} = props.service;
    return (
        <div className="service">
            
            <div className="card">
                    <img className="card-img-top img-fluid w-100" src={img} alt="Card cap" />
                    <div className="card-body">
                    <h5 className="card-title text-info mb-3">{title}</h5>
                    <div className="services-info mb-3">
                        <p><i className="fas fa-calendar-week"></i>{days} Days</p>
                        <p><i className="fas fa-map-marker-alt"></i>{place}</p>
                    </div>
                    <div className="service_short_desc">
                        <p>{short_desc.slice(0,120)}</p>
                    </div>
                    <div className="service-price text-center">
                        <h5>BDT {money} <small>/person</small></h5>
                    </div>
                    </div>
                    <div className="text-center mb-4 mt-3">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-warning text-white">Book Now</button>
                    </Link>
                    </div>
                </div>
        </div>
    );
};

export default Service;