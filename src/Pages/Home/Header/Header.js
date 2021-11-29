import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
      <div>
        <div className="container-style blue circleBehind">
          <Link to="/home" className="hv">
            HOME
          </Link>
          <Link to="/contact" className="hv">
            CONTACT
          </Link>
          <Button target="_blank" href="https://drive.google.com/drive/folders/1a4DVBo4Tg9UMw33FRAPSzKAaQBYpXSbe" variant="outline-secondary" className=" blue text response">RESUME</Button>
        </div>
       
      </div>
    );
};

export default Header;