import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import Drawer from './drawer';
import TopBar from './topbar';
import Search from './search';
import View from './view';

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <TopBar open={this.state.open} onOpen={this.handleDrawerOpen}/>

          <Drawer open={this.state.open} onClose={this.handleDrawerClose}/>

          <BrowserRouter>
            <div>
              <Route exact path="/" component={Search}/>
              <Route path="/search" component={Search}/>
              <Route path="/view/:osid" component={View}/>
            </div>
          </BrowserRouter>

        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Dashboard);
