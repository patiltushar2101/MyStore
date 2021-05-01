import React from 'react';
import logoWordmark from '../../../static/logo-wordmark.png';


const Preloader = () => (
  <div className="preloader">
    <div className="dizzy-gillespie"></div>
    {/* <div class="pacman"></div>
    <div class="dot"></div> */}
    <img alt="logo wordmark" src={logoWordmark} />
  </div>
);

export default Preloader;
