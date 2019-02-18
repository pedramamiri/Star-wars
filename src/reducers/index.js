import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router'
import filmReducer         from './filmReducer';
import animationReducer    from './animationReducer';
import characterReducer    from './characterReducer';


const createRootReducer = (history) =>  combineReducers({
    film            : filmReducer,
    animation       : animationReducer,
    character       : characterReducer,
    router          : connectRouter(history)
});

export default createRootReducer