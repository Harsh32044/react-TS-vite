import React from "react"
import { Todo } from "../model"
import { nanoid } from "nanoid";
import './styles.css'
import SingleTodoComponent from "./SingleTodoComponent";

interface Props {
    todoArr: Todo[];
    setTodoArr: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todoArr, setTodoArr}: Props) => {
  
  const todoList = todoArr.map(item => {
    return <div key={nanoid()} className="todoItem">{item.todo}</div>
  })
    return (
    <div className="todos">
      {todoArr.map(todo => {
        return <SingleTodoComponent 
                  todo={todo}
                  key={nanoid()}
                  todoArr={todoArr}
                  setTodoArr={setTodoArr}
                  />
      })}
    </div>
  )
}

export default TodoList
