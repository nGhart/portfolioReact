import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="about">
      <h1 className="font1 title">About</h1>

      <div className="aboutSection">
        <div className="aboutImage">
          <div className="shadow">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              alt=""
            />
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
            {/* Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. */}
          </p>
          <div className="credit font2">
            Photo by{' '}
            <a href="https://unsplash.com/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Michael Dam
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/mEZ3PoFGs_k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
