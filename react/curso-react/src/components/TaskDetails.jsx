import React from 'react';
import { useParams, useHistory  } from 'react-router-dom';

import "./TaskDetails.css"

import Button from './Buttom';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory()
   
    const handleBackButtonClick = () => {
        history.goBack();
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem dolorum amet id sint deserunt!</p>          
            </div>
        </>
      );
}
 
export default TaskDetails;