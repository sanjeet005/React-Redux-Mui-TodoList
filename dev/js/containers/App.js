import React from 'react';

// imports mui starts
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import MiniDrawer  from './MainLayout/MainLayout';

// imports router v4 starts
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// imports redux starts
import {Provider} from 'react-redux';
import store from '../reducers/Store';
import ListComponent from '../components/ListComponent';
import AboutComponent from '../components/AboutComponent';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Switch>
          <MiniDrawer>
            <Route exact path="/" component={ListComponent} />
            <Route path="/userList" component={ListComponent} />
            <Route path="/about" component={AboutComponent} />
          </MiniDrawer>
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
