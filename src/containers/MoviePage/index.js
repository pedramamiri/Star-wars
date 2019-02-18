import React,
       { Component }       from 'react';
import { connect }         from 'react-redux';
import PropTypes           from 'prop-types';
import { getFilm }         from '../../actions/filmActions';
import Loader              from '../../components/Loader'
import './style.css'

class MoviePage extends Component {

  componentWillMount = () => {
    if(!this.props.filmLoaded )
      this.props.getFilm(this.props.path)
  }
  
  render() {
    const { filmTitle, charactersLoaded,characters,filmRelease_date } = this.props
    if(!charactersLoaded)
      return <Loader />
    return (
      <div className="MoviePage">
        <p>{filmTitle}({filmRelease_date})</p>
        <p>CHARACTERS</p>
        <ul>
        {
          characters.map(char=><li key={char}>{char}</li>)
        }
        </ul>
      </div>
    );
  }
}

MoviePage.propTypes = {
  getFilm            : PropTypes.func,
  path               : PropTypes.string,
  filmLoaded         : PropTypes.bool,
  filmTitle          : PropTypes.string,
  charactersLoaded   : PropTypes.bool,
  characters         : PropTypes.array,
  filmRelease_date   : PropTypes.string
}  

const mapStateToProps = (state)=>({
  path                : state.router.location.pathname,
  filmLoaded          : state.film.film.loaded && (state.router.action === "POP"),
  filmTitle           : state.film.film.title,
  charactersLoaded    : !state.character.loading && state.character.characters.loaded && !state.film.loading,
  characters          : state.character.characters.charactersName,
  filmRelease_date    : state.film.film.release_date
})

export default connect(mapStateToProps,{getFilm})(MoviePage);
  
