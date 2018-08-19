import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import ShipSelect from './shipselect';

const styles = theme => ({
  space: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: 3 * theme.spacing.unit,
    marginRight: 3 * theme.spacing.unit,
    width: 200,
  },

  searchBtn: {
    marginLeft: 3 * theme.spacing.unit,
    marginRight: 3 * theme.spacing.unit,

  }
});

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {q: '', ship: ''};
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick({
        q: this.state.q,
        ship: this.state.ship.value
      });
    }
  }

  handleShipChange = (selectedShip) => {
    this.setState({
      ship: selectedShip
    })
  };

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.container}>

        <span className={classes.space}/>
        <ShipSelect {...this.props} onChange={this.handleShipChange} name="ship" value={this.state.ship} />

        <Input
          name="q"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
          placeholder="Search"
          onChange={this.handleTextChange}
        />

        <Button variant="outlined" color="primary" onClick={() => this.handleClick()} className={classes.searchBtn}>
          Search
        </Button>
        <span className={classes.space}/>
      </div>
    )
  };
}

export default withStyles(styles)(SearchForm);
