import React, { useEffect, useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
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
            <div className="card-deck my-5">
               {
                   services.map(service => <Service key={service._id} service={service}></Service>)
               }
             
                
              
               
            </div>
        </div>
    );
};

export default Services;