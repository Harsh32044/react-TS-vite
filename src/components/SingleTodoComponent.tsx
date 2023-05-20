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

    const [edit, setEdit] = React.useState(false)
    const [editTodo, setEditTodo] = React.useState(todo.todo)
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        inputRef.current?.focus()
    }, [edit])
    
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

    const handleEdit = (e:React.FormEvent, id:string) => {
        e.preventDefault()
        setTodoArr(todoArr.map(todoItem => (
            todoItem.id === id ? {
                ...todoItem,
                todo: editTodo
            }
            :
            todoItem
        )))
        setEdit(false)
    }

    return (
        <form className='todos_single' onSubmit={(event) => handleEdit(event, todo.id)}>
            {
                edit ? (
                    <input ref={inputRef} type="text" value={editTodo} onChange={(event) => setEditTodo(event.target.value)}/>
                )
                :
                (
                    todo.isDone ? (
                        <s className="todos_single_text">{todo.todo}</s>
                    
                    ) : (
                        
                        <span className="todos_single_text">{todo.todo}</span>
                    )
                )
            }
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(edit => !edit)
                    }
                }
                }><AiFillEdit/></span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTodoComponent
