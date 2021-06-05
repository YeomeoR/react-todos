import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        // console.log(e)
      e.preventDefault()
    setInputText(e.target.value);
  };

    const submitHandler = (e) => {
      e.preventDefault()
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
        setInputText('')
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  
  return (
    <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todo" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
