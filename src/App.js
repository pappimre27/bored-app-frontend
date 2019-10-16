import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Activies from './components/activities/ActivityForm';
import MyList from './components/MyList/MyList';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Activies} />
            <Route path='/activities' component={Activies} />
            <Route path='/mylist' component={MyList} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
