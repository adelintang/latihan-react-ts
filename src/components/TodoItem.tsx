import { useDispatch } from 'react-redux'
import { deleteTodoActionCreator, toggleTodoActionCreator } from '../states/todos/action'

interface TodoItemInterface {
  todo: TypeTodo
}
type onToggleType = (id: number) => void

type onDeleteType = (id: number) => void

interface TypeTodo {
  title: string
  date: string
  id: number
  rangeTime: number
  isComplete: boolean
}

const TodoItem = ({ todo }: TodoItemInterface): JSX.Element => {
  const dispatch = useDispatch()

  const onDelete: onDeleteType = (id: number): void => {
    dispatch(deleteTodoActionCreator(id))
  }

  const onToggle: onToggleType = (id: number): void => {
    dispatch(toggleTodoActionCreator(id))
  }

  return (
    <div className="shadow-md p-4">
      <h2 className="text-lg font-semibold">{todo.title}</h2>
      <p className="text-base text-slate-400">{todo.date}</p>
      <p className="text-base text-slate-600">{todo.rangeTime} jam</p>
      <button
        type="button"
        className={`${todo.isComplete ? 'bg-green-500' : 'bg-red-500'} px-2 py-1 rounded-md text-white mt-4 mr-3`}
        onClick={() => { onToggle(todo.id) }}
      >{todo.isComplete ? 'un complete' : 'complete'}</button>
      <button
        type="button"
        className="bg-red-500 px-2 py-1 rounded-md text-white mt-4"
        onClick={() => { onDelete(todo.id) }}
      >delete</button>
    </div>
  )
}

export default TodoItem
