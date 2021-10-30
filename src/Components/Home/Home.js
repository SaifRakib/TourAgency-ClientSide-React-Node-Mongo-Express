import React from 'react';
import Banner from '../Banner/Banner';
import FindAirlince from '../FindAirlince/FindAirlince';
import Services from '../Services/Services';
import TravelServices from '../TravelServices/TravelServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TravelServices></TravelServices>
            <FindAirlince></FindAirlince>
        </div>
    );
};

export default Home;