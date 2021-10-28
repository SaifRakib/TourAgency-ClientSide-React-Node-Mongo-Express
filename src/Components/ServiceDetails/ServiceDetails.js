import React from 'react';

const ServiceDetails = () => {
    return (
        <div>
            <div className="service_details">
                <div className="service_img">
                    <img src="" alt="" />
                </div>
                <div className="service_information">
                    <h3 className="service_title">Cox's Bazar in the leargest sea beach in the world.</h3>

                   <div className="service_place">
                   <p><i className="fas fa-calendar-week"></i>3 days</p>
                    <p><i className="fas fa-map-marker-alt"></i>Cox's Bazar, Bangladesh</p>
                   </div>

                   <div className="service_description">
                       <p></p>
                   </div>

                   <div className="service_details_button">
                       <button>Place Order</button>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;