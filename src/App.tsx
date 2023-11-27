// import { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import type { todoType } from './states/todos/reducer'

interface stateType {
  todos: todoType[]
}

const App = (): JSX.Element => {
  const todos = useSelector((states: stateType) => states.todos)

  return (
    <div className="grid gap-y-6">
      <AddTodo />
      <div className="w-[80%] mx-auto flex flex-col gap-y-3">
        {todos.map((todo: todoType) => (<TodoItem key={todo.id} todo={todo} />))}
      </div>
    </div>
  )
}

export default App
