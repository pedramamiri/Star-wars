import {
    SPACESHIP_LOADING,
    MODAL_LOADING
} from './types';

export const changeSpaceshipStatus = ()=>dispatch=>{
    dispatch({
        type:SPACESHIP_LOADING,
    })
};

export const changeModalStatus = ()=>dispatch=>{
    dispatch({
        type:MODAL_LOADING,
    })
};

