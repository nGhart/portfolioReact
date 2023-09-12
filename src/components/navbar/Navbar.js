import React, { useState } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    console.log('first');
  };
  return (
    <>
      <div className="navbar">
        <div className="center">
          <div className="header">
            <NavLink to="/">
              <div className="brand font4">
                <h1>portfolio</h1>
              </div>
            </NavLink>

            <div className="largeList">
              <NavLink to="about">
                <span className="navList">About</span>
              </NavLink>
              <NavLink to="skills">
                <span className="navList">Skills</span>
              </NavLink>
              <NavLink to="project">
                <span className="navList">Projects</span>
              </NavLink>
              <NavLink to="contact">
                <span className="navList">Contact</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <button className="toggle">
        <i
          className={`${
            toggleMenu ? 'fas fa-angle-down arrow' : 'fas fa-angle-up arrow'
          }`}
          onClick={() => {
            handleToggle();
          }}
        ></i>
      </button>
      <div
        style={{}}
        className={`${toggleMenu ? 'toggleContainer show' : 'toggleContainer'}`}
      >
        <ul>
          <NavLink
            to="about"
            onClick={() => {
              handleToggle();
            }}
          >
            <li className="navList">About</li>
          </NavLink>
          <NavLink
            to="skills"
            onClick={() => {
              handleToggle();
            }}
          >
            <li className="navList">Skills</li>
          </NavLink>
          <NavLink
            to="project"
            onClick={() => {
              handleToggle();
            }}
          >
            <li className="navList">Projects</li>
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => {
              handleToggle();
            }}
          >
            <li className="navList">Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
