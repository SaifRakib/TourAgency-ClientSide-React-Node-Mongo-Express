import React from 'react';
import './TravelServices.css';

const TravelServices = () => {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="header_title text-center my-5">
                        <h2>Our Duty</h2>
                    </div>
                    <div className="duty my-5">
                        <div className="duty_body d-flex">
                            <div className="duty_img">
                                <img style={{width:"280px",height:"190px"}} src="http://www.soaptheme.net/html/travelo/images/offers01.jpg" alt="" />
                            </div>
                            <div className="duty_info px-4">
                                <h5 className="pt-3 text-primary">Hire Cars</h5>
                                <p>We work with all the major international car hire brands for you. </p>
                                <button className="btn btn-light">See More</button>
                            </div>

                        </div>

                        <div className="duty_body d-flex">
                            <div className="duty_img">
                                <img style={{width:"280px",height:"190px"}} src="http://www.soaptheme.net/html/travelo/images/offers02.jpg" alt="" />
                            </div>
                            <div className="duty_info px-4">
                                <h5 className="pt-3 text-primary">Cruise Deals</h5>
                                <p>We work with all the major international ship company brands for our clinet</p>
                                <button className="btn btn-light">See More</button>
                            </div>

                        </div>
                        <div className="duty_body d-flex">
                            <div className="duty_img">
                                <img style={{width:"280px",height:"190px"}} src="http://www.soaptheme.net/html/travelo/images/offers03.jpg" alt="" />
                            </div>
                            <div className="duty_info px-4">
                                <h5 className="pt-3 text-primary">Hotel Booking</h5>
                                <p>We work with many major and minor hotel company around the world.</p>
                                <button className="btn btn-light">See More</button>
                            </div>

                        </div>
                        <div className="duty_body d-flex">
                            <div className="duty_img">
                                <img style={{width:"280px",height:"190px"}} src="http://www.soaptheme.net/html/travelo/images/offers04.jpg" alt="" />
                            </div>
                            <div className="duty_info px-4 px-4">
                                <h5 className="pt-3 text-primary">Fly in Comfort</h5>
                                <p>Explore our routes, find the best fares on your flight. Complete your trip</p>
                                <button className="btn btn-light">See More</button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default TravelServices;