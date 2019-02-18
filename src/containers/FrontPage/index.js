import React,
       { Component }           from 'react';
import Spaceship               from '../../components/Spaceship'    
import MovieBox                from '../MovieBox';
import { connect }             from 'react-redux';
import PropTypes               from 'prop-types';
import { getAllFilms }         from '../../actions/filmActions';
import {changeSpaceshipStatus} from '../../actions/animationActions';
import './style.css'



class FrontPage extends Component {
  
  componentDidMount(){
    if(!this.props.filmsLoaded)
      this.props.getAllFilms();
  }
  componentWillUnmount(){
    if (this.props.spaceshipStatus)
      this.props.changeSpaceshipStatus()
  }
 
  render() {
      const {spaceshipStatus} = this.props
      return (
        <div className="FrontPage">
          {spaceshipStatus ? <Spaceship /> : "" } 
          <MovieBox  />
        </div>
      );
    }
  }

FrontPage.propTypes = {
  getAllFilms           : PropTypes.func,
  changeSpaceshipStatus : PropTypes.func,
  spaceshipStatus       : PropTypes.bool,
  filmsLoaded           : PropTypes.bool,
  modalStatus           : PropTypes.bool
}  

const mapStateToProps = (state)=>({
  spaceshipStatus   : state.animation.spaceshipStatus,
  filmsLoaded       : state.film.films.loaded
})

export default connect(mapStateToProps,{getAllFilms,changeSpaceshipStatus})(FrontPage);
  




 
  
