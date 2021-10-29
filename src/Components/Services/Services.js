import React, { useEffect, useState } from 'react';
import './Services.css';
import service1 from './../../image/service1.jpg';
import service2 from './../../image/service2.jpg';
import service3 from './../../image/service3.jpg';
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
            <div className="card-deck my-5">
               {
                   services.map(service => <Service key={service._id} service={service}></Service>)
               }
             
                
              
               
            </div>
        </div>
    );
};

export default Services;