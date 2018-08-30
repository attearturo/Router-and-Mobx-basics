import * as React from 'react';
import { observer } from 'mobx-react';
import { 
    BrowserRouter as Router,
    Link, Route
} from 'react-router-dom';

import './Root.scss';

import { Login } from './Login';


import { store } from '../../stores/Store';
import { Dashboard } from './Dashboard';

interface IRootProps{}

@observer export class Root extends React.Component<IRootProps> {

    render(){
        return <Router>
            <div>

                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />

<h2>{store.user && store.user.name}</h2>

            </div>
        </Router>
    }
}























