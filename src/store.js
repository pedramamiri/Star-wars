import { 
        createStore,
        applyMiddleware,
        compose
       }                        from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware }     from 'connected-react-router'
import { ALL_MODAL_CLOSE }      from './actions/types';
import thunk                    from 'redux-thunk';
import createRootReducer        from './reducers';

export const history = createBrowserHistory();

const initialState = {};

const middleware = [thunk,routerMiddleware(history)];

const store = createStore(createRootReducer(history), initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

history.listen(() => {
  if(store.getState().animation.modalStatus)
      store.dispatch({
      type:ALL_MODAL_CLOSE,
    }) 
})

export default store





