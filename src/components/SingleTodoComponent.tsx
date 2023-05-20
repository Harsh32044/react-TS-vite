import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

interface Props {
    todo: Todo,
    todoArr: Todo[],
    setTodoArr: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodoComponent: React.FC<Props> = ({ todo, todoArr, setTodoArr }) => {
    
    function handleDone(id: string) {
        setTodoArr(todoArr.map(oldTodoItem => {
            return oldTodoItem.id === id ? {
                ...oldTodoItem,
                isDone : !oldTodoItem.isDone
            }
            : oldTodoItem
        }))
    }

    const handleDelete = (id: string) => {
        setTodoArr(todoArr.filter(todoItem => 
            todoItem.id !== id))
    }

    return (
        <form className='todos_single'>
            {
            todo.isDone ? (
                <s className="todos_single_text">{todo.todo}</s>

            ) : (
                
                <span className="todos_single_text">{todo.todo}</span>
            )
            }
            <div>
                <span className="icon" ><AiFillEdit/></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTodoComponent
