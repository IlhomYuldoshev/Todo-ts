import React from 'react';
import {ITodo} from "../interfaces";

interface TodoListProps {
  todos: Array<ITodo>
  onToggle(id: number):void
  onRemove: (id: number) => void
}

// type TodosProps = {
//   todos: ITodo[]
// }

const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
  if(todos.length === 0) {
    return <h3 className="center">There is not any todos</h3>
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ["todo"]
        if(todo.completed) {
          classes.push("completed")
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  onToggle(todo.id)
                }}
              />
              <span>{todo.title}</span>
              <i onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                onRemove(todo.id)
              }}
                className="material-icons red-text">delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};

export default TodoList
