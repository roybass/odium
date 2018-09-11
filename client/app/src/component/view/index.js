import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip, TextField } from '@material-ui/core';
import fitService from '../../service/fit-service';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chip: { margin: theme.spacing.unit }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.osid = props.match.params.osid;
    this.state = {
      fit: null
    };
  }

  componentDidMount() {
    this.updateFit();
  }

  async updateFit() {
    if (!this.osid) {
      return;
    }
    const fitResponse = await fitService.getFits({ osid: this.osid });
    if (fitResponse.status !== 200) {
      console.log('Error loading fit', fitResponse.error);
      return;
    }
    const fit = await fitResponse.json();
    if (!fit || !fit.length) {
      return;
    }
    this.setState({ fit: fit[0] });
  }

  displayModules(modules) {
    return modules.map(this.displayModule).join("\n");
  }

  displayModule(module) {
    let result = module.name;
    if (module.amount) {
      result += ' X' + module.amount;
    }
    if (module.charge) {
      result += ' (' + module.charge.name + ')';
    }
    return result;
  }

  render() {
    const { classes } = this.props;
    if (this.state.fit === null) {
      return (
        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <div>
            <span>No Fit</span>
          </div>
        </main>
      );
    }
    const fit = this.state.fit;
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <h2>{fit.name}</h2>
        <h3>Ship: {fit.ship}</h3>
        {fit.tags.map(tag => {
          return (<Chip className={classes.chip} label={tag}/>);
        })}

        <div>
          <TextField multiline="true" fullWidth="true" autoFocu="true" value={this.displayModules(fit.fit)}/>
        </div>



      </main>
    );
  }
}

export default withStyles(styles)(Main);
