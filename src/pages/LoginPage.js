import React from 'react';
import { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const submit = () => {
    console.log("Checking credentials...");
    console.log("Username: ", username);
    console.log("Password: ", password);
  }

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Sign in to proceed
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          onChange={(event) => handleUsernameChange(event)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          onChange={(event) => handlePasswordChange(event)}
        />
      </form>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => submit()}
      >
        Sign in
      </Button>
      <Button variant="outlined" color="primary" href="/">
        Cancel
      </Button>
    </>
  )
}

export default LoginPage;
