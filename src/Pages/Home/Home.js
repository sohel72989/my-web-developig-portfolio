import React from 'react';
import Header from './Header/Header';
import Information from './Information/Information';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header />
            <Information />
            <Contact/>
        </div>
    );
};

export default Home;