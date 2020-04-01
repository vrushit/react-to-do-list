import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import Header from './components/Layout/Header';

import About from './components/Pages/About';

import './App.css';

// import uuid from 'uuid';

import Axios from 'axios';

class App extends Component {

  state = {
    todos: [
      // {
      //   id:uuid.v4(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id:uuid.v4(),
      //   title:'Dinner',
      //   completed: false
      // },
      // {
      //   id:uuid.v4(),
      //   title: 'Meeting with Boss',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}))
  }


// Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id)
      {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //delTodo 

  delTodo = (id) => {

    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>     this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    )

    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add To Do

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completede: false
    // }

    Axios.post('https://jsonplaceholder.typicode.com/todos',{title,
  completed: false})
  .then (res => 
    this.setState({ todos: [...this.state.todos, res.data] }));

  }


  render() {

    return (

      <Router>
      <div className="App">
        <div className="container" >
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
        markComplete = {this.markComplete}
        delTodo={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path="/about" component ={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
