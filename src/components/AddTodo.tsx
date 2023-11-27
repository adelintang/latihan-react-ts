import React from 'react'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { addTodoActionCreator } from '../states/todos/action'

const AddTodo = (): JSX.Element => {
  const dispatch = useDispatch()
  const [title, setTitle] = useInput<string>('')
  const [date, setDate] = useInput<string>('')
  const [rangeTime, setRangeTime] = useInput<number>(0)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const id = +new Date()
    const isComplete = false

    dispatch(addTodoActionCreator({ id, title, date, rangeTime, isComplete }))

    setTitle('')
    setDate('')
    setRangeTime(0)
  }

  return (
    <form
      className="flex flex-col shadow-md w-[80%] mx-auto p-4 gap-y-3"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="masukan todo"
        className="border border-solid border-blue-500 rounded px-3 py-2"
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
      />
      <input
        type="text"
        placeholder="masukan tanggal"
        className="border border-solid border-blue-500 rounded px-3 py-2"
        value={date}
        onChange={(e) => { setDate(e.target.value) }}
      />
      <input
        type="number"
        placeholder="tenggat waktu (jam)"
        className="border border-solid border-blue-500 rounded px-3 py-2"
        value={rangeTime}
        onChange={(e) => { setRangeTime(parseInt(e.target.value)) }}
      />
      <button
        type="submit"
        className="bg-blue-500 py-1 rounded text-white hover:bg-blue-700"
      >Save</button>
    </form>
  )
}

export default AddTodo
