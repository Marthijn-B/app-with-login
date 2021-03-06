import React from 'react';

import Typography from '@material-ui/core/Typography';


import Button from '@material-ui/core/Button';

const NotFoundPage = () => (
  <>
    <Typography variant="h2" gutterBottom>
      404: Page Not Found
    </Typography>
    <Button variant="outlined" color="primary" href="/">
      Return to main page
    </Button>
  </>
)

export default NotFoundPage;
