import {
    GET_FILMS,
    FILMS_LOADING,
    GET_FILM
} from './types';
import {getCharacters} from './characterActions';
const axios = require('axios');

export const getAllFilms = ()=> dispatch=>{
    dispatch(setFilmLoading());
    axios.get("/films/").then((res) => {
        dispatch({
            type:GET_FILMS,
            payload:res.data
        })
    })
    .catch(err=>console.log(err));   
};
export const getFilm = (path)=> dispatch=>{
    dispatch(setFilmLoading());
    axios.get(path).then((res) => {
        dispatch({
            type:GET_FILM,
            payload:res.data
        })
        dispatch(getCharacters(res.data.characters))
    })
    .catch(err=>console.log(err));   
};

export const setFilmLoading = ()=>{
    return {
        type: FILMS_LOADING,
    };
};


