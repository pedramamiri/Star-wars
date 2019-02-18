import  React,
        { Component }      from 'react';
import  { BrowserRouter }  from 'react-router-dom';
import  { Provider }       from 'react-redux';
import  PropTypes          from 'prop-types'
import  store,
        { history }        from './store';
import  Main               from './containers/Main';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';


class App extends Component {

  render() {

    return (
      <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <ConnectedRouter history={history}>
                <Main />
              </ConnectedRouter>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
}     
    

export default App;
