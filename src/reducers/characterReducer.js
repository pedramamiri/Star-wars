import {
    GET_CHARACTERS,
    CHARACTERS_LOADING
   }                  from '../actions/types';
const initialState = {
loading :false,
characters:{
   loaded:false,
   charactersName:[]
},

};

export default (state = initialState,action) => {
switch(action.type){
   case GET_CHARACTERS:
       return {
           ...state,
           loading:false,
           characters:{
               loaded:true,
               charactersName:[
                   ...action.payload
               ]
           }    
       }   
   case CHARACTERS_LOADING:
       return{
           ...state,
           loading:true
       }    
       
   default:
       return state;    
   }
   
}