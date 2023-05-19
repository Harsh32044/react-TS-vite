import React, { useState } from "react";
import './App.css'
import InputField from "./components/InputField";
import { Todo } from "./model";
import { nanoid } from "nanoid";


const App: React.FC = () => {

  const [todo, setTodo] = React.useState<string>("")
  //Array of TODOs

  const [todoArr, setTodoArr] = useState<Todo[]>([])
  
  function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    console.log(todoArr);
    if (todo) {
      setTodoArr([...todoArr, {id: nanoid(), todo, isDone: false}])
      setTodo("")
    }
    
  }
  
  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo ={setTodo} handleAdd={handleAdd}/>
      {todoArr.map(todoItem => {
        return <li key={nanoid()}>{todoItem.todo}</li>
      })}
    </div>
  )
}

export default App
