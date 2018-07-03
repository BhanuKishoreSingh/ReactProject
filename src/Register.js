import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
//import Login from './Login';
//import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
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

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Registration done');
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Register
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div>
             <TextField
              className={classes.textField} label="Name"
               onChange = {(event,newValue) => this.setState({first_name:newValue})}
               />
             <br/>
             <TextField
               className={classes.textField} label="Name"
               onChange = {(event,newValue) => this.setState({last_name:newValue})}
               />
             <br/>
             <TextField
               className={classes.textField} label="Name"
               onChange = {(event,newValue) => this.setState({email:newValue})}
               />
             <br/>
             <TextField
              className={classes.textField} label="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button variant="contained" className={classes.button} onClick={this.handleClick}>Submit</Button>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(Register));

/*
class Register extends React.Component {

  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:3000/api/";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  render() {
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          </AppBar>
        </div>
        <div>
             <TextField
               hintText="Enter your First Name"
               floatingLabelText="First Name"
               onChange = {(event,newValue) => this.setState({first_name:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter your Last Name"
               floatingLabelText="Last Name"
               onChange = {(event,newValue) => this.setState({last_name:newValue})}
               />
             <br/>
             <TextField
               hintText="Enter your Email"
               type="email"
               floatingLabelText="Email"
               onChange = {(event,newValue) => this.setState({email:newValue})}
               />
             <br/>
             <TextField
               type = "password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default withRouter(Register);
*/
