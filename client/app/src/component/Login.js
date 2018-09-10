import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Tooltip, IconButton} from '@material-ui/core';
import LoginIcon from '@material-ui/icons/SentimentDissatisfied';

const styles = theme => ({});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.updateUser();
  }

  updateUser() {
    fetch('/auth/user').then(resp => {
      if (!resp || resp.status !== 200) {
        return;
      }
      resp.json().then(user => {
        this.setState({user});
      });
    });
  }

  render() {
    console.log(this.state);
    if (this.state.user !== null) {
      return (<span>{this.state.user.CharacterName}</span>);
    }
    return (
      <Tooltip title="Login">
        <IconButton color="inherit" href="/auth/login?state=fit">
          <LoginIcon />
        </IconButton>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(Login);
