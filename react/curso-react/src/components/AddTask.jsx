import React, { useState } from "react";

import "./AddTask.css";

import Button from "./Buttom";

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState(" ");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData("");
  };


  return (
    <div className="add-task-container">

      <input onChange={handleInputChange} 
      value={inputData}
      className="add-task-input" 
      type="text"
       />

      <div className="add-task-button-container">
        <button onClick={handleAddTaskClick} className="button">Adicionar</button>
      </div>
    </div>
  );
};

export default AddTask;
