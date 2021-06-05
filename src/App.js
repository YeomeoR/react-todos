import React, { useState, useEffect } from 'react';
import Form from './components/Form.component';

import './App.css';
import TodoList from './components/TodoList.component';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filtered, setFiltered] = useState([]);

  const filteredHandler = () => {
    switch (status) {
      case 'completed':
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  useEffect(() => {
    filteredHandler();
  }, [todos, status]);

  return (
    <>
      <header className="App">
        <h1>Todos</h1>
      </header>
      <Form
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList filtered={filtered} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
