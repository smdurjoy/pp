import React, { Component, Fragment } from 'react';
import { Switch, Route} from "react-router-dom";
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Skill from '../components/Skill/Skill';
import Hobbies from '../components/Hobbies/Hobbies';
import Portfolio from '../components/Portfolio/Portfolio';

export default class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/education" component={Education}/>
                    <Route exact path="/skill" component={Skill}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/hobbies" component={Hobbies}/>
                </Switch>
        </Fragment>
        )
    }
}
