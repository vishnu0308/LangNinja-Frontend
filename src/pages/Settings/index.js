import React,{useState, useEffect} from 'react';
import { Card, Button, ButtonGroup, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import { useLocation, useNavigate } from "react-router-dom";
import QuizQuestion from "../../components/Question";
import Routes from '../../shared/routes';
import {auth} from '../../apis'

const Settings = () => {
    const [details,setDetails] = useState([]);
    useEffect(() => {
        const url = Routes.getUserLanguages;
        auth({ method: "post", url: url })
            .then(data => {
                console.log(data.data.languages);
                setDetails(data.data.languages);
            })
            .catch(error => {
                console.log("EEError:", error);
            });
    }, []);

    const resetProgress = (language) => {
        const url = Routes.resetProgress;
        auth({ method: "post", url: url, data:{language} })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log("EEError:", error);
            });
    }

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Navbar />
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'60%'}}>
                <Typography variant='h4' >
                    Settings Page
                </Typography>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                    <Typography variant='h5'>
                        Languages Settings
                    </Typography>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        {
                            details?.map((detail)=>(
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',background:'#EDF5E1',margin:'4px',padding:'10px',borderRadius:'3px'}}>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
                                        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start'}}>
                                            <Typography variant='body1'>
                                                Language : {detail.language}
                                            </Typography>
                                        </div>
                                        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start'}}>
                                            <Typography variant='body1'>
                                                Level : {detail.level}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',marginLeft:'30px'}}>
                                        <Button variant="contained"
                                            color="primary"
                                            style={{ marginTop: '20px' }}
                                            onClick={() => {
                                                resetProgress(detail.language)
                                            }}
                                        >
                                            Reset progress to Level 1
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;