import {
         GET_FILMS,
         FILMS_LOADING,
         GET_FILM
        }                  from '../actions/types';
const initialState = {
    loading :false,
    films:{
        loaded:false
    },
    film:{
        loaded:false
    }
};

export default (state = initialState,action) => {
    switch(action.type){
        case GET_FILMS:
            return {
                ...state,
                loading:false,
                films:{
                    loaded:true,
                    ...action.payload
                }    
            }
        case GET_FILM:
            return {
                ...state,
                loading:false,
                film:{
                    loaded:true,
                    ...action.payload
                }
            }    
        case FILMS_LOADING:
            return{
                ...state,
                loading:true
            }    
            
        default:
            return state;    
        }
        
}
    



