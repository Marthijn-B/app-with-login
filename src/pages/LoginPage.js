import React from 'react';

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

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Sign in to proceed
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="username" label="Username" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
      </form>
      <Button variant="outlined" color="primary" href="/#sign-in-clicked">
        Sign in
      </Button>
      <Button variant="outlined" color="primary" href="/">
        Cancel
      </Button>
    </>
  )
}

export default LoginPage;
