import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';

const styles = theme => ({
  space: {
    flexGrow: 1,
  },
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

  constructor(props) {
    super(props);
    this.state = {ship: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick(this.state);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <Input
          name="ship"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
          placeholder="Ship name"
          onChange={this.handleChange}
        />
        <span className={classes.space}/>
        <Button variant="outlined" color="primary" onClick={() => this.handleClick()} classes="">
          Search
        </Button>
      </div>
    )
  };
}

export default withStyles(styles)(SearchForm);
