import './App.css';
import Tasks from './components/Tasks';

import Header from './components/Header';
import { useState } from 'react';

const  App = () => {

  const [tasks, setTasks] = useState(
    [{
        id:1,
        text:"Doctor Appointment",
        day: "Feb 5th at 03:00",
        remainder: true,
    },
    {
        id:2,
        text:"Workout",
        day: "Feb 6th at 03:00",
        remainder: true,
    },
    {
        id:3,
        text:"Meals",
        day: "Feb 7th at 03:00",
        remainder: false,
    }
    ])

    //Delete Task

    const deleteTask  = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }


  return (
    <div className="container">
      <Header/>
      <Tasks task ={tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
