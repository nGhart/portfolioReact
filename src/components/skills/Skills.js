import React from 'react';
import './skills.scss';
import js from '../../assets/js.png';

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="font1">Skills</h1>
      <div className="skillsSection">
        <div className="skillContainer">
          <div className="skillImage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="React icon"
            />
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
            <img
              src="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
              alt=""
            />
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
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/free-sass-3629037-3030394.png?f=webp"
              alt="Sass icon"
            />
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
