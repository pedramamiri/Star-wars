import React, { Component }   from 'react'; 
import { 
    ReactComponent as BatteryFull
    }                         from '../../assets/svg/batteryFull.svg';
import { 
      ReactComponent as Batteryemapty
    }                         from '../../assets/svg/batteryempty.svg';
import classNames             from 'classnames';
import { connect }            from 'react-redux';
import PropTypes              from 'prop-types';
import { Link }               from 'react-router-dom';
import { changeModalStatus }  from '../../actions/animationActions'; 
import  store                 from '../../store';
import { ALL_MODAL_CLOSE }    from '../../actions/types';
import './style.css'

class MovieBox extends Component {

  closeModal = (e)=>{
    let close_modal_from_outside_movieBox = !this.movieBox.contains(e.target) && this.props.modalStatus;
    if(close_modal_from_outside_movieBox)
      store.dispatch({
        type:ALL_MODAL_CLOSE,
      })
  }

  componentDidMount = ()=>{
    document.body.addEventListener("mousedown",this.closeModal);    
  }
  componentWillUnmount = ()=>{    
    document.body.removeEventListener("mousedown",this.closeModal,false)
  }
  
  openMovie = ()=>{
    this.props.changeModalStatus();
  }
  
    
  render() {
    const {modalStatus,films} = this.props
      
    return (
      <div className="MovieBox" ref={el=>this.movieBox = el}>

          <div className="topSide">
            <div className={classNames(
              "topLeftSide",
              {"showTopSide": modalStatus}
            )}></div> 
            <div className="button"  onClick={this.openMovie}>
              <span>All movies</span> 
              {modalStatus ? <Batteryemapty className="battery"  />   : <BatteryFull className="battery" />}
            </div>
            <div className={classNames(
              "topRightSide",
              {"showTopSide": modalStatus}
            )}></div>
          </div>

          <div className={
            classNames(
              "mainSide",
              {openMainSide : modalStatus}
            )
          }>
            <div className="leftSide"></div>
            <ul className="movieNames">
             
              {
                films ?
                    films.sort(function(a, b){return new Date(a.release_date) - new Date(b.release_date)}).map(film=>{
                    let movieId = film.url.split('/').slice(4,6).join('/');
                    return(
                    <li key={film.title}>
                      <Link to={movieId}>{film.title}</Link>
                    </li>
                    )
                  }
                  )
                :
                ""  
              }
            </ul>
            <div className="rightSide"></div>
          </div>  
      </div>
    );
  }
}

 
  MovieBox.propTypes = {
    films             : PropTypes.array,
    modalStatus       : PropTypes.bool,
    changeModalStatus : PropTypes.func
  }  
  
  const mapStateToProps = (state)=>({
    films       : state.film.films.results,
    modalStatus : state.animation.modalStatus
  })
  
  export default connect(mapStateToProps,{changeModalStatus})(MovieBox);


























