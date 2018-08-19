import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SimpleTable from './SimpleTable';
import Drawer from './drawer';
import TopBar from './topbar';
import SearchForm from './search-form';
import fitService from '../service/fit-service';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchResults: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  handleSearch(params) {
    const dashboard = this;
    fitService.getFits(params).then(response => {
      if (response.status !== 200) {
        return null;
      }
      return response.json();
    }).then((searchResults) => {
      dashboard.setState({searchResults});
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <TopBar open={this.state.open} onOpen={this.handleDrawerOpen}/>

          <Drawer open={this.state.open} onClose={this.handleDrawerClose}/>

          <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
            <SearchForm onClick={this.handleSearch}/>
            <Typography variant="display1" gutterBottom>
              Fits
            </Typography>
            <div className={classes.tableContainer}>
              <SimpleTable data={this.state.searchResults}/>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
