import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {

      sno = todos[todos.length - 1].sno + 1;
    }


    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }

    console.log(myTodo);
    setTodos([...todos, myTodo]);

    //localStorage.setItem("todos", JSON.stringify(todos));

  }


  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  //[
  //{
  //  sno: 1,
  //  title: "Go to the market ",
  //  desc: "You need to go to the market to work done"
  // },
  // {
  //   sno: 2,
  //   title: "Go to the Mall",
  //   desc: "You need to go to the Mall to work done2"
  // },
  // {
  //   sno: 3,
  //   title: "Go to the ghat",
  //   desc: "You need to go to the Ghat to work done3"
  // },
  //]);
  return (
    <>
      <Router>
        <Header title="My Todos List's" serchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
