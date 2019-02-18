import React, { Component } from 'react';
import './style.css';

class Loader extends Component {

    render() {
      return (
        <div className="loaderWrapper">
          <div className="Loader">
            <div></div>
            <div></div>
          </div>
        <span>Please wait...</span>
        </div>
      );
    }
  }
  
export default Loader;