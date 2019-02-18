import React,
       { Component }        from 'react';
import { Switch, Route }    from 'react-router-dom'
import Header               from '../../components/Header';
import FrontPage            from '../FrontPage';
import MoviePage            from '../MoviePage';
import NotFound             from '../NotFound';



class Main extends Component {

    render() {
      return (
        <div className="Main">
          <Header />
          <Switch>
              <Route exact path='/' component={FrontPage} />
              <Route exact path='/films/:id' component={MoviePage} />
              <Route path='*' component={NotFound} />
          </Switch>  
        </div>
      );
    }
  }


  export default Main;



