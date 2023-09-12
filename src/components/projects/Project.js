import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import './projects.scss';
import cocktail from '../../assets/cocktails.png';
import number from '../../assets/number.png';
import notes from '../../assets/notes.png';
import thirty from '../../assets/30seconds.png';
import math from '../../assets/math.png';
import bakery from '../../assets/bakery.png';
import note from '../../assets/notes.mp4';
import thirtySeconds from '../../assets/30Seconds.mp4';
import cocktails from '../../assets/cocktails.mp4';
import mathAlgo from '../../assets/math.mp4';
import numberGame from '../../assets/number.mp4';
import bake from '../../assets/bakery.mp4';

const Project = () => {
  return (
    <div className="projectSection">
      <h1 className="font1">Projects</h1>
      <p className="font3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Ut enim ad
        minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="projectContainer">
        <div className="videoCard">
          <a href="https://commerce-theta-six-90.vercel.app/" target="_blank">
            <HoverVideoPlayer
              className="videoPlayer"
              videoSrc={cocktails}
              hoverOverlay={
                <div className="hover-overlay">
                  <h3 className="font4 bg1">E-commerce App</h3>
                  <p className="font1">Simple e-commerce application</p>
                </div>
              }
              pausedOverlay={
                <img
                  src={cocktail}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </a>
        </div>
        <div className="videoCard">
          <a href="https://github.com/nGhart/GuessTheNumber" target="_blank">
            <HoverVideoPlayer
              className="videoPlayer"
              videoSrc={numberGame}
              hoverOverlay={
                <div className="hover-overlay">
                  <h1 className="font4 bg1">Guess the Number Game</h1>
                  <p className="font1 fc">Simple guessing game.</p>
                </div>
              }
              pausedOverlay={
                <img
                  src={number}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </a>
        </div>
        <div className="videoCard">
          <a href="https://notes-app-orcin-three.vercel.app/" target="_blank">
            <HoverVideoPlayer
              className="videoPlayer"
              videoSrc={note}
              hoverOverlay={
                <div className="hover-overlay">
                  <h1 className="bg2 font4">Notes App</h1>
                  <p className="font1" style={{ color: 'hotpink' }}>
                    React CRUD application
                  </p>
                </div>
              }
              pausedOverlay={
                <img
                  src={notes}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </a>
        </div>
        <div className="videoCard">
          <a href="https://30seconds-seven.vercel.app/" target="_blank">
            <HoverVideoPlayer
              className="videoPlayer"
              videoSrc={thirtySeconds}
              hoverOverlay={
                <div className="hover-overlay">
                  <h1 className="font4 bg1">30 Seconds Game</h1>
                  <p className="font1">Two player guessing game</p>
                </div>
              }
              pausedOverlay={
                <img
                  src={thirty}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </a>
        </div>
        <div className="videoCard">
          <a href="https://math-algorith.vercel.app/fibonacci" target="_blank">
            <HoverVideoPlayer
              className="videoPlayer"
              videoSrc={mathAlgo}
              hoverOverlay={
                <div className="hover-overlay">
                  <h1 className="font4 bg1">Math App</h1>
                  <p className="font1">Basic math functions</p>
                </div>
              }
              pausedOverlay={
                <img
                  src={math}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </a>
        </div>
        <div className="videoCard">
          <a href="https://final-bakery.vercel.app/" target="_blank">
            <HoverVideoPlayer
              className="videoPlayer"
              videoSrc={bake}
              hoverOverlay={
                <div className="hover-overlay">
                  <h1 className="font4 bg1">Bakery Site</h1>
                  <p className="font1">Bakery site with shop components.</p>
                </div>
              }
              pausedOverlay={
                <img
                  src={bakery}
                  alt="Bakery Site"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
