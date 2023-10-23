import React from 'react';
import {Card,Box,CardContent,Typography} from '@mui/material';

const CardStyle = {
  width: 300, // Set the card width.
  margin: '10px', // Add margin for spacing.
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between', // Vertically align content.
};

const TitleStyle = {
  fontSize: 18, // Customize the title font size.
  fontWeight: 'bold', // Make the title bold.
  marginBottom: '8px', // Add space below the title.
};

const StatCard = ({ stats}) => {

    return(
        <div>
            <Card style={CardStyle}>
            <CardContent>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                    <Typography style={TitleStyle} variant="h5">
                        {stats.language}
                    </Typography>
                    <Typography style={TitleStyle} variant="h5">
                        Lvl {stats.current_level}
                    </Typography>
                </Box>
                <div style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
                    <div>
                        <Typography variant="body1" >
                            Total Excercises : 
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body1" >
                            {stats.total_excercises} 
                        </Typography>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
                    <div>
                        <Typography variant="body1" >
                            Average Score (%) : 
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body1" >
                            {stats.avg_score} 
                        </Typography>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
                    <div>
                        <Typography variant="body1" >
                            Max Score (%) : 
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body1" >
                            {stats.max_score} 
                        </Typography>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
                    <div>
                        <Typography variant="body1" >
                            Min Score (%) : 
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body1" >
                            {stats.min_score} 
                        </Typography>
                    </div>
                </div>
            </CardContent>
            </Card>
        </div>
    )
}

export default StatCard;