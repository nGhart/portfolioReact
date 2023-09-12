import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="" target="_blank">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="www.linkedin.com/in/oscarlyn-ghartey" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="copyright">
        <p className="font5">Copyright 2023</p>
      </div>
    </div>
  );
};

export default Footer;
