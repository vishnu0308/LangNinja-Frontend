import React from 'react';
import { Card, Button, ButtonGroup, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import { useLocation, useNavigate } from "react-router-dom";

const LanguageInfoPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const language = queryParams.get("language");
    const level = queryParams.get("level");
    return (
        <div>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                <Navbar />
                <Typography variant="h3">
                    {language} 
                </Typography>
                <Typography variant="h4">
                    Level : {level}/5
                </Typography>
                <Typography variant="body1">
                    Score more than 70% in the below quiz to move to the next level
                </Typography>
                <Button variant="contained" href={`/quiz?language=${language}`}>
                    Take Quiz
                </Button>
            </Grid>

        </div>
        
    );
};

export default LanguageInfoPage;
