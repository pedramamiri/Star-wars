import {
    SPACESHIP_LOADING,
    MODAL_LOADING,
    ALL_MODAL_CLOSE
       } from '../actions/types'
const initialState = {
    spaceshipStatus:true,
    modalStatus:false
};



export default (state = initialState,action) => {
    switch(action.type){
        case SPACESHIP_LOADING:
            return {
                ...state,
                spaceshipStatus:false
            }
        case MODAL_LOADING:
            return{
                ...state,
                modalStatus:!state.modalStatus
            }
        case ALL_MODAL_CLOSE:
        return{
            ...state,
            modalStatus:false
        }         
               
        default:
            return state;    
    }
  
}