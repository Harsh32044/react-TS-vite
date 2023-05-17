import React from "react";
import './App.css'
import InputField from "./components/InputField";


const App: React.FC = () => {

  const [todo, setTodo] = React.useState<string>("")
  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo ={setTodo}/>
    </div>
  )
}

export default App
