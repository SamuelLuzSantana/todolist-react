import React, { useEffect, useState } from "react";
import Task from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Rot, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/header";
import "./index.css";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  // let me = "socrro saulo";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Get Out",
      completed: false,
    },
    {
      id: "2",
      title: "try out",
      completed: true,
    },
  ]);

  //Requisição para api fake 
  // useEffect(() => {
  //   const fetchTask = async () => {
  //     const {data}  = await axios.get(
  //       "https://jsonplaceholder.cypress.io/todos?_Limit=5"
  //     );
  //       setTasks(data);
  //   }


  //   fetchTask();
  // }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  };

  return (
    <Rot>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />

        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Rot>
  );
};

export default App;
