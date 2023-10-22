import React, { useState, useEffect } from 'react';
import {Typography,Box} from '@mui/material';

const Score = ( { total_score, percentage  } ) => {
    return(
        <div style={{display:'flex',flexDirection:'column' ,justifyContent:'center'}}>
            <Box m={2} display="flex" flexDirection="row" alignItems="center"></Box>
                <Typography variant="body1" >
                    Total Score Obtained: 
                </Typography>
                <Typography variant="body1" >
                    {total_score}
                </Typography>
            <Box/>
            <Box m={2} display="flex" flexDirection="row" alignItems="center"></Box>
                <Typography variant="body1" >
                    Percentage of Total Score Obtained: 
                </Typography>
                <Typography variant="body1" >
                    {percentage}
                </Typography>
            <Box/>
            {
                (percentage >= 70)?
                <Typography variant="body1" color="green" >
                    Congrats! You have reached next level:)
                </Typography> :
                <Typography variant="body1" color="red" >
                    Better luck next time! Come back again and break this level:)
                </Typography>
            }
        </div>
    )
}

export default Score;