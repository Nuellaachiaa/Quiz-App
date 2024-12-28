import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Button from '@mui/material/Button';
import axios from "axios";
import { Icon } from "@mui/material";


function App() {
  const [questions, setQuestions] = useState([]); 

  useEffect(() => {
    axios.get('https://localhost:3000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching the questions:', error);
      });
  }, []);

  const item = 5;

  return (
    <div className="QuestionContainer">
      
      <div className="questionNumber">
      <p >Question 1 of 30</p>
      </div>

      <div className="questionTagBox">
     <h1>What is the largest lake in the world?</h1>
      </div>

      <div className="choices">
        <div><button className="altOne">Caspian Sea</button></div>
        <div><button className="altTwo">Lake Superior</button></div>
        <div><button className="altThree">Ontario</button></div>
        <div><button className="altFour">Baikal</button></div>
      </div>

      <br />
      
      <div className="navButtons">
        
        <div className="prev">
          <Button sx={{ color: '#A594F9'}}><KeyboardDoubleArrowLeftIcon /> Previous</Button>
        </div>

        <div className="next">
          <Button sx={{ color: '#A594F9'}}> Next <KeyboardDoubleArrowRightIcon /></Button>
        </div>
      
      </div>
        
     
    </div>
  );
}

export default App;
