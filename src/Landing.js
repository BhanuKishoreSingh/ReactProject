import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    console.log('Came to the landing page');
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return(
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <h2>This is the landing page</h2>
      </div>
    );
  }
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(Landing));
