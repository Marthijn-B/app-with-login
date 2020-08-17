import React from 'react';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

const PrivatePage = () => (
  <>
    <Typography variant="h2" gutterBottom>
    This is the private page.
    Should only be accessed through a sucessful login
    </Typography>
    <Button variant="outlined" color="primary" href="/">
      Return to main page
    </Button>
  </>
)

export default PrivatePage;
