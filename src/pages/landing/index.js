import React from 'react';
import { Card, Button, ButtonGroup, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';

const LandingPage = () => {

  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
        <Navbar />
        <Grid item>
            <Typography variant="h1">
                LangNinja
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h5">
                25 quizzes to language mastery
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h3">
                Welcome! Let the training start
            </Typography>
        </Grid>

        <Grid item>
            <Box m={2} display="flex" flexDirection="row" alignItems="center">
                <Button variant="contained" style={{marginRight:"8px"}} href="/signup">
                    Signup
                </Button>
                <Button variant="contained" style={{marginRight:"8px"}} href="/signin">
                    Signin
                </Button>
            </Box>
        </Grid>

    </Grid>
  );
};

export default LandingPage;
