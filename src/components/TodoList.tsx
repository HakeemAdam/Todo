import React from 'react'
import {Todo} from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'


interface Props{
    todos: Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="todos">
        {todos.map(todo=>(
            <SingleTodo  todos={todos} key={todo.id}  todo={todo} setTodos={setTodos}/>
        ))}
        </div>
  )
}

export default TodoList