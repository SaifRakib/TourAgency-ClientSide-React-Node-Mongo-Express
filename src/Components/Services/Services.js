import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/allServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <h2 className="text-center my-5">Our Popular Services</h2>
        {services.length === 0?
           <div className="text-center">
                <div className="spinner-border text-dark my-5" role="status">
                    <p className="sr-only my-5">Loading...</p>
                </div>
           </div>
        : 
           <div className="card-deck my-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>}
        </div>
    );
};

export default Services;