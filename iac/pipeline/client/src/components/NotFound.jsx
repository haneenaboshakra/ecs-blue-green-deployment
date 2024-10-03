import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__message">Page Not Found</h2>
      <p className="not-found__description">Sorry The Page You’re Looking For Doesn’t Exist</p>
      <div className="not-found__buttons">
        <Link to="/">
        <button className='home_btn'>Return Home</button>
        </Link>

        <Link to="/contact">
        <button className='contact_btn'>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
