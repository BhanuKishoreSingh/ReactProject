import React from 'react';
//import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Feedback(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          On a scale on 1-5 how satisfied with your recruitment experience
        </Typography>
        <Typography component="p">

        </Typography>
        <Typography variant="headline" component="h3">
          Based on the experience how likely would you recommend our company
        </Typography>
        <Typography component="p">

        </Typography>
      </Paper>
    </div>
  );
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feedback);
//export default withRouter(Feedback);
