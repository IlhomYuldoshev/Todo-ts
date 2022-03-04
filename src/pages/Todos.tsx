import React from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {ITodo} from "../interfaces";
import {NavLink} from "react-router-dom";

declare var confirm:(question: string) => boolean


const TodosPage: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  React.useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todosTS") || "[]") as ITodo[]

    setTodos(savedTodos)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("todosTS", JSON.stringify(todos))
  }, [todos])

  const addTodoHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(p => [...p, newTodo])
  }

  const toggleHandler = (id: number) => {
    setTodos(p => p.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove: boolean = confirm(`Are you seriously want to delete?`)
    if(shouldRemove) {
      setTodos(p => p.filter(todo => todo.id !== id))
    }
  }

  return (
    <div className="container mt2">
      <TodoForm onAdd={addTodoHandler}/>
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>

      <NavLink to="/">
        <button className="waves-effect waves-light btn">Back to Home</button>
      </NavLink>
    </div>
  );
};

export default TodosPage
