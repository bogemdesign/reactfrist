import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Views/Home'
import Error from '../Views/Error'

function Router() {
  return ( 
      <div >
    < Switch >
    < Route exact path = '/'
    component = {
      Home
    } />
    < Route exact path = '/*'
    component = {
      Error
    } />


    </Switch>

    </div>
  );
}

export default Router;