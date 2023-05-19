import React from "react"
import { Todo } from "../model"
import { nanoid } from "nanoid";
import './styles.css'

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
        {todoList}
    </div>
  )
}

export default TodoList
