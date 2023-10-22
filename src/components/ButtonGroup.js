import React from 'react';
import Button from '@mui/material/Button';

const ButtonGroup = () => {
  return (
    <div className="mt-4">
      <Button variant="contained" color="primary" href="/signup">
        Sign Up
      </Button>
      <Button variant="contained" color="secondary" href="/signin" className="ml-2">
        Sign In
      </Button>
    </div>
  );
};

export default ButtonGroup;
