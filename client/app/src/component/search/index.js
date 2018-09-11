import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './search-form';
import SimpleTable from './SimpleTable';
import fitService from '../../service/fit-service';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import history from '../history';
import qs from 'query-string';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  searchContainer: {
    'justify-content': 'center'
  },
  tableContainer: {
    height: 320,
  },
});

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      searchResults: null
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    if (this.props.location && this.props.location.search) {
      const query = qs.parse(this.props.location.search);
      const params = JSON.parse(query.params);
      this.handleSearch(params);
    }
  }

  handleSearch(params) {
    const main = this;
    this.setState({ isLoading: true });

    fitService.getFits(params).then(response => {
      if (response.status !== 200) {
        main.setState({ isLoading: false });
        return null;
      }
      return response.json();
    }).then((searchResults) => {
      main.setState({ searchResults, isLoading: false });
      history.push('/search?params=' + JSON.stringify(params));
    });

  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <SearchForm className={classes.searchCotnainer} onClick={this.handleSearch}/>
        <Typography variant="display1" gutterBottom>
          Fits
        </Typography>
        <div className={classes.tableContainer}>
          {this.state.isLoading === true ?
            <div>Loading...</div> :
            <SimpleTable data={this.state.searchResults}/>}
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
