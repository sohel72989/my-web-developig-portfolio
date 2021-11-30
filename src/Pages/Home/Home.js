import React from 'react';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skills from './Skill/Skills';
import AboutMe from './Information/AboutMe';
const Home = () => {
    return (
        <div>
            <AboutMe />
            <Skills/>
            <Project/>
            <Contact />
        </div>
    );
};

export default Home;