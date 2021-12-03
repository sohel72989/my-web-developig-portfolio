import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
      <div>
        <nav class="navbar">
        <ul class="nav-links">
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       <div class="menu">
              <li>
              <Link to="/home" className="hv">
            HOME
          </Link>
         </li>
              <li>
              <Link to="/skills" className="hv">
            SKILLS
          </Link>
          </li>
              <li>
              <Link to="/project" className="hv">
           PROJECTS
          </Link>
         </li>
              <li>
              <Link to="/blogs" className="hv">
           BLOGS
          </Link>
         </li>
         
              <li>
              <Link to="/home/contact" className="hv">
            CONTACT
          </Link>
          </li>
              <li>
              <Link to="/aboutMe" className="hv">
            ABOUT ME
          </Link>
         </li>
              <li>
              <Button href="Sohel_Rana'S_Resume_F.pdf" download="Sohel_Rana'S_Resume_F.pdf" variant="outline" className="button">RESUME</Button>
              </li>
              </div>
              </ul>
          </nav>
        </div>
      
    );
};

export default Header;