import React from 'react';
import { Card, Button, ButtonGroup, Typography, Box, TextField, Autocomplete } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import { useLocation, useNavigate } from "react-router-dom";
import BasicTable from '../../components/LeaderboardTable';
import {auth} from '../../apis';
import Routes from '../../shared/routes';
import { useState,useEffect } from 'react';

const Leaderboard = () =>{
    const [language,setLanguage] = useState("");
    const [allLanguages,setAllLangs] = useState([]);
    const [leaderboardData,setLeaderboardData] = useState([]);
    useEffect(() => {
        const allurl = Routes.getAllLangs;
        auth({ method: "post", url: allurl })
            .then(data => {
                setAllLangs(data.data.languages);
            })
            .catch(error => {
                console.log("EEError:", error);
            });
    }, []);

    useEffect(()=>{
        const url = Routes.getLeaderboard;
        auth({method:'post',url,data:{language}})
        .then((data)=>{
            console.log(data.data);
            const newdata = data.data.map((row)=>(
                {...row,name:row.user.name}
            ))
            setLeaderboardData(newdata);
            }).catch((err)=>{
            console.log(err)
        })
    },[language])

    const handleLanguageChange= (event, newValue) =>{
        setLanguage(newValue);
    }

    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center'}} >
            <Navbar />
            <Typography variant="h4" style={{marginBottom:'25px'}} >
                Leaderboard
            </Typography>
            <Typography variant="body1" style={{marginBottom:'20px'}} >
                Choose language to view the leaderboard:
            </Typography>

            <Autocomplete
                id="language-selector"
                options={allLanguages}
                value={language}
                onChange={handleLanguageChange}
                renderInput={(params) => <TextField {...params} label="Select Language" />}
                style={{width:'25%',marginBottom:'10px'}}
            />
            <BasicTable rows={leaderboardData}/>
            

        </div>
    )
}

export default Leaderboard;