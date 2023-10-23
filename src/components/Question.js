import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {auth} from '../apis';
import Routes from '../shared/routes';

function QuizQuestion({ language, question_id, question, marks, options,option_selected, index, showAnswers, answer, individual_score  }) {
  // State to keep track of the selected option
  const [option_choosed, setOptionChoosed] = useState((option_selected!=-1)?options[option_selected]:"");
  // Event handler for when a radio option is selected
  const handleOptionChange = (event) => {
    const selectedIndex = options.findIndex((option) => option === event.target.value);
    if(selectedIndex!=-1){
        setOptionChoosed(event.target.value);
        let url = Routes.saveAnswer;
        console.log("Option choosed : ",selectedIndex);
        auth({method:"POST",url,data:{language, question_id, option_choosed:selectedIndex}})
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
  };

  return (
    <div>
        <Card sx={{margin:'4px'}}>
        <CardContent>
            {/* Question number and question */}
            <Typography variant="h6" gutterBottom>
                Question {index}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {question}
            </Typography>

            {/* Marks display */}
            <Typography variant="body2" color="textSecondary">
                Marks: {marks}
            </Typography>

            {/* Radio button options */}
            <RadioGroup
                name={`question_${question_id}`}
                value={option_choosed}
                onChange={handleOptionChange}
            >
            {options.map((option, index) => (
                <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio disabled={showAnswers}/>}
                    label={option}
                />
            ))}
            </RadioGroup>
        </CardContent>
        </Card>
        {showAnswers && 
        <div style={{display:"flex",flexDirection:"column"}}>
            <Typography variant="body3">
                Actual Answer is Option {answer}
            </Typography>
            <Typography variant="body3">
                Marks obtained : {individual_score}
            </Typography>
        </div>
        }
    </div>
    
  );
}

export default QuizQuestion;
