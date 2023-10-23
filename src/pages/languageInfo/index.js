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
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center'}}>
                <Navbar />
                <Typography variant="h4" style={{margin:'4px'}}>
                    Language : {language} 
                </Typography>
                <Typography variant="h5" style={{margin:'4px'}}>
                    Level : {level}/5
                </Typography>
                <Typography variant="body1" style={{margin:'4px', marginBottom:'5%'}}>
                    Score more than 70% in the below quiz to move to the next level
                </Typography>
                <Button variant="contained" href={`/quiz?language=${language}`} style={{margin:'4px'}}>
                    Take Quiz
                </Button>
                <Typography variant="body2" style={{margin:'4px',color:'blue'}}>
                    About Levels:
                </Typography>
                <Typography variant="body2" style={{margin:'4px',color:'blue'}}>
                    There are five major levels : <span style={{color:'black'}}> 1,2,3,4 and 5. </span>
                </Typography>
                <Typography variant="body2" style={{margin:'4px',color:'blue'}}>
                    There are 4 minor levels between each 2 major levels.
                </Typography>
                <Typography variant="body2" style={{margin:'4px',color:'blue'}}>
                    For example, between 1 and 2 the minor levels are <span style={{color:'black'}}>1.1, 1.2, 1.3 and 1.4</span>
                </Typography>

        </div>
        
    );
};

export default LanguageInfoPage;
