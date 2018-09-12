import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import numeral from 'numeral';

import { Chip, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};


function SimpleTable(props) {
  const { classes, data } = props;

  if (!data || !data.length) {
    return (<p>No results</p>);
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Fit Name</TableCell>
            <TableCell>Ship</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Buy Price</TableCell>
            <TableCell>Training Required</TableCell>
            <TableCell numeric>Modules</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.fit.osid}>
                <TableCell component="th" scope="row">
                  <a href={`/view/${n.fit.osid}`}>{n.fit.name}</a>
                </TableCell>
                <TableCell>{n.fit.ship}</TableCell>
                <TableCell>
                  {n.fit.tags.map(tag => {
                    return (<Chip label={tag}/>);
                  })}
                </TableCell>
                <TableCell>{numeral(n.appr.buy).format('0.0 a')}</TableCell>
                <TableCell>{Object.keys(n.diff).length > 0 ? 'Yes' : 'No'}</TableCell>
                <TableCell numeric>{n.fit.fit.length}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}


SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
