import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Navigation from './containers/navigation/Navigation'
import Path from './containers/path/Path'
import ApplyLoan from './containers/applyloan/ApplyLoan';
import Start from './containers/start/Start';
import './App.css'

const styles = theme => ({
  layout: {
    width: 'auto',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    },
  },
  toolbarTitle: {
    flex: 1,
    fontWeight: '600',
  },
  toolbarSecondary: {
    justifyContent: 'space-between'
  },
  content: {
    marginLeft: 'auto', [theme.spacing.unit * 3]: {},
    marginRight: 'auto', [theme.spacing.unit * 3]: {},
    maxWidth: 1100,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <Router>
          <div>
            <div className="nav-back">
              <div className="nav">
                <div className="ffcg-logo"></div>
                <Navigation />
              </div>
              <div className="heading">
                <Typography
                  component="h1"
                  variant="h2"
                  color="inherit"
                  align="center"
                  className={classes.toolbarTitle}>
                  Forefront Bank ger förmånliga lån till folket
                </Typography>
              </div>
            </div>
            <div className={classes.content}>
              <Switch>
                <Route exact path="/" component={Start} />
                <Route path="/ansokan" component={ApplyLoan} />
                <Route component={Path} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App)
