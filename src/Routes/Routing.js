import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeView  from '../View/HomeView'
import MovieView  from '../View/MovieView'


function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path={`/movie`} component={MovieView} /> 
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}

export default Routing
