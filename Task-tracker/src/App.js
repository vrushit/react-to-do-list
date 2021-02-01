import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import { useState } from 'react';

const  App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

    //Add Task

    const addTask = (task) => {
        const id = Math.floor(Math.random()*1000) + 1

        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
   
      }

    //Delete Task

    const deleteTask  = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle remainder

    const toggleRemainder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? { 
        ...task, remainder: !task.remainder
      } : task))
    }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAddTask = {showAddTask}
      />
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ?
       <Tasks task ={tasks} 
       onDelete = {deleteTask} 
       onToggle = {toggleRemainder}
      /> : ' No Task to Show '}
    </div>
  );
}

export default App;
