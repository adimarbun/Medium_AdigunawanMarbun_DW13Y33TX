import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../App.css";
import { login } from "../config/api";

class Login extends Component {
  constructor() {
    super();
    this.state = {
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

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    login(user).then(() => {
      if (localStorage.getItem("tokenn")) {
        window.location = "/";
      } else {
        window.location = "/login";
        alert("Wrong Password or email");
      }
    });
  }
  render() {
    return (
      <div className="body-register">
        <div className="contentLogin">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper-login">
              <Typography component="h1" variant="h4">
                Sign in with email
              </Typography>
              <p>
                Enter the email address associated with your account,and we'll
                send a magic link to your inbox.
              </p>
              <form onSubmit={this.onSubmit} className="form-login" novalidate>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "40px" }}
                >
                  continue
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="register" variant="body2">
                      <p> &lt; All sign in options</p>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Login;
