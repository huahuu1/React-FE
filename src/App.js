import React, { Component } from 'react';
// import Counter from "./components/counter/counter";
import TodoApp from "./components/todo/TodoApp";
import './bootstrap.css';
import { Navbar } from "./components/header/navbar.jsx";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
        {/* <Counter /> */}

        <Navbar />
        <TodoApp />
    </div>
  );

}

export default App;
