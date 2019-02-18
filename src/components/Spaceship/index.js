import React, { Component } from 'react';
import SpaceshipPhoto from '../../assets/images/spaceship.png'
import './style.css';

class Spaceship extends Component {

    render() {
      return (
        <div className="Spaceship">
            <p>A long time ago in a galaxy<br/> far , far away...</p>
            <img src={SpaceshipPhoto} alt="spaceship" />
        </div>
      );
    }
  }
  
export default Spaceship;