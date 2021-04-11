import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../pages/Login'
import notification from '../pages/Notification'
export default class Routers extends Component {
    render() {
        return (
            <div>
                 <Router >
                     <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/notification" exact component={notification} />      
                     </Switch>
                 </Router>                
            </div>
        )
    }
}