import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './search-form';
import SimpleTable from './SimpleTable';
import fitService from '../../service/fit-service';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  tableContainer: {
    height: 320,
  },
});

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(params) {
    const main = this;
    fitService.getFits(params).then(response => {
      if (response.status !== 200) {
        return null;
      }
      return response.json();
    }).then((searchResults) => {
      main.setState({ searchResults });
    });
  }

  render() {
    const { classes } = this.props;

    return (
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
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
