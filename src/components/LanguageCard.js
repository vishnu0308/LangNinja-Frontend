import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const CardStyle = {
  width: '300px', // Set the card width.
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

const StarContainer = {
  display: 'flex',
};

const ArrowButtonStyle = {
  alignSelf: 'flex-end', // Position the arrow button at the bottom right.
};

function LanguageCard({ languageName, level }) {
  return (
    <Card style={CardStyle}>
      <CardContent>
        <Typography style={TitleStyle} variant="h5">
          {languageName}
        </Typography>
        <div style={StarContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} color={index < parseInt(level) ? 'primary' : 'disabled'} />
          ))}
        </div>
      </CardContent>
      <IconButton style={ArrowButtonStyle} component={Link} to={`/info?language=${languageName}&level=${level}`}>
        <ArrowForwardIcon />
      </IconButton>
    </Card>
  );
}


export default LanguageCard;
