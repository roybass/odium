import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Chip } from '@material-ui/core';

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
  console.log('props', props);
  const {classes, data} = props;

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
            <TableCell numeric>Modules</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.osid}>
                <TableCell component="th" scope="row">
                  <a href={`/view/${n.osid}`}>{n.name}</a>
                </TableCell>
                <TableCell>{n.ship}</TableCell>
                <TableCell>
                  {n.tags.map(tag => {
                    return (<Chip label={tag} />);
                  })}
                </TableCell>
                <TableCell numeric>{n.fit.length}</TableCell>
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
