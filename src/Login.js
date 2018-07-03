import React from 'react';
//import axios from 'axios';
//import UploadScreen from './UploadScreen';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

class Login extends React.Component {

  constructor(props){
    super(props);

    this.state={
      username:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);
  }

  gotoRegister() {
    this.props.history.push('/register');
  }

  handleClick() {
    console.log('Login');
    this.props.history.push('/landing');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Login
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <TextField className={classes.textField} label="Name"
          onChange = {(event,newValue) => this.setState({username:newValue})}
          />
          <br/>
          <TextField className={classes.textField} label="Password"
          onChange = {(event,newValue) => this.setState({password:newValue})}
          />
          <br/>
          <Button variant="contained" className={classes.button} onClick={this.handleClick}>Submit</Button>
          <Button variant="contained" className={classes.button} onClick={this.gotoRegister}>Register</Button>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(Login));
/*
class Login extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.state={
      username:'',
      password:''
    }
  }

  gotoRegister(event) {
    this.props.history.push('/register');
  }

  handleClick(event){
    this.props.history.push('/landing');
    //var apiBaseUrl = "http://localhost:3000/api/";
    //var self = this;
    //var payload={
    //  "email":this.state.username,
    //  "password":this.state.password
  //  }
  //  axios.post(apiBaseUrl+'login', payload).then(function (response) {
    //  console.log(response);
    //  if(response.data.code === 200){
    //    console.log("Login successfull");
        ////var uploadScreen=[];
      //  //uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
        ////self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  //      this.props.history.push('/landing');
  //    }
  //    else if(response.data.code === 204){
  //      console.log("Username password do not match");
  //      alert("username password do not match")
  //  }
  //    else{
  //      console.log("Username does not exists");
//        alert("Username does not exist");
//      }
//    })
  //  .catch(function (error) {
//      console.log(error);
//    });
  }

  render() {
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
          <Typography variant="title" color="inherit" className={classes.flex}>
            Login
          </Typography>
          </AppBar>
        </div>
        <div>
          <TextField
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange = {(event,newValue) => this.setState({username:newValue})}
          />
          <br/>
          <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange = {(event,newValue) => this.setState({password:newValue})}
          />
          <br/>
          <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          <Button label="Register" onClick={(event) => this.gotoRegister(event)}/>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
*/
