import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css';
import Animation from './Animation/Animation';

const Header = () => {
    return (
      <div>
        <Animation/>
        <div className="container-style blue circleBehind">
          <Link to="/home" className="hv">
            HOME
          </Link>
          <Link to="/skills" className="hv">
            SKILLS
          </Link>
          <Link to="/project" className="hv">
           PROJECTS
          </Link>
          <Link to="/blogs" className="hv">
           BLOGS
          </Link>
          <Link to="/home/contact" className="hv">
            CONTACT
          </Link>
          <Link to="/aboutMe" className="hv">
            ABOUT ME
          </Link>
          <Button  href="Sohel_Rana'S_Resume_F.pdf" download="Sohel_Rana'S_Resume_F.pdf" variant="outline-secondary" className=" blue text response">RESUME</Button>
        </div>
       
      </div>
    );
};

export default Header;