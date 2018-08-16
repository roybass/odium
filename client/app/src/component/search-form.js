import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Input, Paper } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  input: {
    margin: theme.spacing.unit,
  },
});

class SearchForm extends React.Component {

  handleClick() {
    console.log(this.props);
  }

  render() {
    return (
      <Paper classes="">
        <div className={this.props.classes.container}>
          <Input
            classes=""
            className={styles.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            placeholder="Ship name"
          />
          <Button variant="outlined" color="primary" onClick={() => this.handleClick()} classes="">
            Search
          </Button>
        </div>
      </Paper>
    )
  };
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);
