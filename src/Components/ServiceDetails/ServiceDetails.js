import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    console.log(service);

    useEffect(() => {
        fetch(`https://haunted-goosebumps-18178.herokuapp.com/allServices/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5">
                    <div className="service_details">
                        <div className="service_img text-center">
                            <img src={service.img} className="img-fluid" alt="" />
                        </div>
                        <div className="service_information">
                            <div className="service_title text-center my-5">
                                <h3 className="text-info">{service.title}</h3>
                            </div>

                            <div className="service_place">
                                <p><i className="fas fa-calendar-week"></i>{service.days} Days</p>
                                <p><i className="fas fa-map-marker-alt"></i>{service.place}</p>
                            </div>

                            <div className="service_description text-center px-5 mb-5">
                                <p>{service.description}</p>
                            </div>

                            <div className="total_cost text-center mb-5">
                                <h5 className="text-dark">Total Cost For {service.days} Days : BDT {service.money}</h5>
                            </div>

                            <div className="service_details_button text-center">
                                <Link to="/placeorder"><button className="btn btn-primary">Place Order</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;