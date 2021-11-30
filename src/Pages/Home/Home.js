import React from 'react';
import Information from './Information/Information';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skills from './Skill/Skills';
const Home = () => {
    return (
        <div>
            <Information />
            <Skills/>
            <Project/>
            <Contact />
        </div>
    );
};

export default Home;