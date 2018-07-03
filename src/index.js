import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Login from './Login';
import Register from './Register';
import Landing from './Landing';
import Feedback from './Feedback';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/landing' component={Landing}/>
        <Route path='/feedback' component={Feedback}/>
      </Switch>
    </main>
)

ReactDOM.render(<Router>
                  <Main />
                </Router>, document.getElementById('root'));
registerServiceWorker();
