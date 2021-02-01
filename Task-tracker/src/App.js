import './App.css';
import Task from './components/Tasks';

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


  return (
    <div className="container">
      <Header/>
      <Task task ={tasks}/>
    </div>
  );
}

export default App;
