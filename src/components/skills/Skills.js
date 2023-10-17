import React from 'react';
import './skills.scss';
import js from '../../assets/js.png';
import react from '../../assets/React-icon.svg.png';
import sass from '../../assets/sass.webp';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import boot from '../../assets/bootstrap.png';

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="font1">Skills</h1>
      <div className="skillsSection">
        <div className="skillContainer">
          <div className="skillImage">
            <img src={html} alt="React icon" />
          </div>
          <div className="skillText">
            <h6 className="font3">Lorem Ipsum</h6>
            <p className="font2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
            <p className="font2">
              Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillImage">
            <img src={css} alt="React icon" />
          </div>
          <div className="skillText">
            <h6 className="font3">Lorem Ipsum</h6>
            <p className="font2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
            <p className="font2">
              Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillImage">
            <img src={react} alt="React icon" />
          </div>
          <div className="skillText">
            <h6 className="font3">Lorem Ipsum</h6>
            <p className="font2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
            <p className="font2">
              Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillImage">
            <img src={js} alt="JS icon" />
          </div>
          <div className="skillText">
            <h6 className="font3">Lorem Ipsum</h6>
            <p className="font2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
            <p className="font2">
              Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillImage">
            <img src={boot} alt="React icon" />
          </div>
          <div className="skillText">
            <h6 className="font3">Lorem Ipsum</h6>
            <p className="font2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
            <p className="font2">
              Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillImage">
            <img src={sass} alt="Sass icon" />
          </div>
          <div className="skillText">
            <h6 className="font3">Lorem Ipsum</h6>
            <p className="font2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
            <p className="font2">
              Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
