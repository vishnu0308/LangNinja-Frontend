import React,{useState, useEffect} from 'react';
import { Card, Button, ButtonGroup, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import { useLocation, useNavigate } from "react-router-dom";
import Routes from '../../shared/routes';
import {auth} from '../../apis'
import StatCard from '../../components/StatCard';

const MyStats = () => {
    const [stats,setStats] = useState([]);
    const url = Routes.getMyStats;
    useEffect(()=>{
        auth({method:"POST",url})
        .then((data)=>{
            console.log("stats list : ",data.data)
            setStats(data.data);
        }).catch((err)=>{console.log(err)});
    },[])
    return(
        <div>
            <Navbar />
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Typography variant="h4">
                    My Stats
                </Typography>
                {
                    stats.map((stat,idx)=>(
                        <StatCard key={idx} stats={stat}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MyStats;