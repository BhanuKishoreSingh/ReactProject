import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    landing: {
      height: '100%',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    control: {
      padding: theme.spacing.unit * 2,
    }
});

class Landing extends React.Component {
  constructor(props) {
    super(props);
    console.log('Came to the landing page');
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return(
      <Grid container className={classes.root}>
        <Grid container
          spacing={16}
          className={classes.register}
          alignItems='center'
          justify='center'
          direction='column'>
          <h2>This is the landing page</h2>
        </Grid>
      </Grid>
    );
  }
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(Landing));
