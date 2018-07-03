import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Landing extends Component {
  constructor(props) {
    super(props);
    console.log('Came to the landing page');
    console.log(props);
  }

  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Welcome"/>
          </div>
          <h2>This is the landing page</h2>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withRouter(Landing);
