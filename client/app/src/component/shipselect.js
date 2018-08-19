import React from 'react';
import Select from 'react-select';
import ships from '../static/ships';
import { withStyles } from '@material-ui/core/styles';


const options = ships.map(i => {
  return { value: i, label: i };
});

const styles = theme => ({

  selectbox: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  }

});

class ShipSelect extends React.Component {
  handleChange = (selectedOption) => {
    this.props.onChange(selectedOption);
  };

  render() {
    const { classes } = this.props;

    return (
      <Select
        placeholder="Select Ship"
        className={classes.selectbox}
        value={this.props.value}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default withStyles(styles)(ShipSelect);
