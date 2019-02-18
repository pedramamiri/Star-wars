import React,
       { Component }    from 'react';
import { 
        ReactComponent as Logo
       }                from '../../assets/svg/logo.svg';
import { Sky }          from '../../assets/canvas/sky';
import './style.css'


class Header extends Component {

  componentDidMount= ()=>{
    (function showSky(){
      var canvas = document.getElementById("canvas");
      var sky   = new Sky(canvas);
      sky.setDimention();
      sky.setParticles();
      sky.animate();
    })()
  }

  render() {
      return (
        <div className="Header" id="header">
            <Logo className="logo" />
            <canvas ref={el=>this.canvas =el} className="canvas" id="canvas"></canvas>
        </div>
      );
    }
  }



export default Header