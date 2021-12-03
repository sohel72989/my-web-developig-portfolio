import React from 'react';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skills from './Skill/Skills';
import AboutMe from './Information/AboutMe';
import Banner from './Header/Banner/Banner';
import Animation from './Header/Animation/Animation';
const Home = () => {
    return (
        <div>
          <Animation/>
            <Banner/>
            <AboutMe />
            <Skills/>
            <Project/>
            <Contact />
        </div>
    );
};

export default Home;