import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'
import { Draggable } from '@hello-pangea/dnd'

interface Props {
    todo: Todo;
    todoArr: Todo[];
    setTodoArr: React.Dispatch<React.SetStateAction<Todo[]>>;
    // dispatch: React.Dispatch<Actions>
    index: number;
}

const SingleTodoComponent: React.FC<Props> = ({ index, todo, todoArr, setTodoArr }) => {

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
                isDone: !oldTodoItem.isDone
            }
                : oldTodoItem
        }))
    }

    const handleDelete = (id: string) => {
        setTodoArr(todoArr.filter(todoItem =>
            todoItem.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: string) => {
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
        <Draggable index={index} draggableId={todo.id} key={todo.id}>
            {
                (provided,snapshot) => (
                    <form className={`todos_single ${snapshot.isDragging ? 'drag': ''}`} onSubmit={(event) => handleEdit(event, todo.id)} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                        {
                            edit ? (
                                <input ref={inputRef} type="text" value={editTodo} onChange={(event) => setEditTodo(event.target.value)} />
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
                            }><AiFillEdit /></span>
                            <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
                        </div>
                    </form>
                )
            }
        </Draggable>
    )
}

export default SingleTodoComponent
