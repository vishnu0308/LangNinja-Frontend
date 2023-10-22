import React,{useState, useEffect} from 'react';
import { Card, Button, ButtonGroup, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Navbar from '../../components/Navbar';
import { useLocation, useNavigate } from "react-router-dom";
import QuizQuestion from "../../components/Question";
import Routes from '../../shared/routes';
import {auth} from '../../apis'
import Score from '../../components/Score';


const QuizPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const language = queryParams.get("language");
    const [quizQuestions,setQuizQuestions] = useState([]);
    const [showAnswers,setShowAnswers] = useState(false);
    const [answers,setAnswers] = useState([]);
    const [individual_scores,setIndiv] = useState([]);
    const [score,setScore] = useState({});
    const navigate = useNavigate();

    const submitQuiz = () => {
        const submit_url = Routes.submitQuiz;
        auth({method:"POST",url:submit_url,data:{language}})
        .then((data)=>{
            console.log("Actual answers : ",data.data.total_score);
            setShowAnswers(true);
            setAnswers(data.data.actual_answers);
            setIndiv(data.data.scores)
            setScore({total_score : data.data.total_score, percentage:data.data.percentage})
        }).catch((err) => {console.log(err)})
    }

    const quitQuiz = () => {
        const submit_url = Routes.quitQuiz;
        auth({method:"POST",url:submit_url,data:{language}})
        .then((data)=>{
            console.log(data);
            navigate('/admin');
        }).catch((err) => {console.log(err)})
    }

    useEffect(() => {
        const url = Routes.getQuizQuestions;
        auth({ method: "post", url: url, data:{language} })
            .then(data => {
                // console.log(data.data.questions);
                setQuizQuestions(data.data.questions);
            })
            .catch(error => {
                console.log("EEError:", error);
            });
    }, []);

    return (
        <div>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                <Navbar />
                <Typography variant="h3">
                    {language} Quiz
                </Typography>
                {
                    showAnswers && <Score total_score={score.total_score} percentage={score.percentage} />
                }
                {
                    quizQuestions?.map((question,index)=>(
                        <QuizQuestion 
                            key={index} 
                            index={index} 
                            question_id={question.question_id._id} 
                            question={question.question_id.question} 
                            marks={question.question_id.marks} 
                            options={question.question_id.options} 
                            language={language} 
                            option_selected={question.option_choosed} 
                            showAnswers={showAnswers} 
                            answer={answers[index]+1}
                            individual_score = {individual_scores[index]}
                        />
                    ))
                }
                {!showAnswers && <Box m={2} display="flex" flexDirection="row" alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={() => {
                            quitQuiz()
                        }}
                    >
                        Quit Quiz
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={() => {
                            submitQuiz()
                        }}
                    >
                        Submit Quiz
                    </Button>
                </Box>}
            </Grid>

        </div>
        
    );
};

export default QuizPage;
