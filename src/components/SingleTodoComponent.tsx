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
    return (
        <form className='todos_single'>
            <span className="todos_single_text">{todo.todo}</span>
            <div>
                <span className="icon"><AiFillEdit/></span>
                <span className="icon"><AiFillDelete/></span>
                <span className="icon"><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTodoComponent
