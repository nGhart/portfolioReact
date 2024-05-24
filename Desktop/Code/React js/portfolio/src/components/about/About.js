import React from 'react';
import './about.scss';
import pic from '../../assets/pic.jpg';

const About = () => {
  return (
    <div className="about">
      <h1 className="font1 title">About</h1>

      <div className="aboutSection">
        <div className="aboutImage">
          <div className="shadow">
            <img src={pic} alt="" />
          </div>
          <div className="imageContainer"></div>
        </div>
        <div className="aboutText">
          <h3 className="font1">Lorem ipsum</h3>
          <h4 className="font2">
            Lorem ipsum dolor sit amet sed do, consectetur adipiscing elit,
          </h4>
          <p className="font3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
