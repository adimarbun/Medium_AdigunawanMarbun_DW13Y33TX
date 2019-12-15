import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../App.css";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

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

export default function Register() {
  const classes = useStyles();
  return (
    <div className="body-register">
      <div className="contentRegister">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="h4">
              <strong>Join Medium.</strong>
            </Typography>
            <p>
              Create an account to receive great stories in your inbox,
              personalize your homepage, and follow authors and topics that you
              love.
            </p>
            <form className={classes.form} noValidate>
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
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Your Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label=" Your Email "
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
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
