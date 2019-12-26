import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../App.css";
import { register } from "../config/api";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      To make Medium work, we log user data and share it with servive provides.
      Click "sign Up" above to accept Medium's
      <Link color="inherit" href="https://material-ui.com/">
        Terms of Services
      </Link>{" "}
      &
      <Link color="inherit" href="https://material-ui.com/">
        Privacy Policy
      </Link>{" "}
    </Typography>
  );
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    register(newUser).then(res => {
      window.location = "/login";
    });
  }
  render() {
    return (
      <div className="body-register">
        <div className="contentRegister">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper-login">
              <Typography variant="h4">
                <strong>Join Medium.</strong>
              </Typography>
              <p>
                Create an account to receive great stories in your inbox,
                personalize your homepage, and follow authors and topics that
                you love.
              </p>
              <form className="form-login" onSubmit={this.onSubmit} noValidate>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Your Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Your email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label=" Your Password"
                  name="password"
                  autoComplete="current-password"
                  autoFocus
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Button type="submit" variant="contained" color="primary">
                  Registration
                </Button>
                <div>
                  <p>
                    all ready have an account?
                    <Link href="login" variant="body2">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
              <Copyright />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Register;
