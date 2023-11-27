import { ActionType } from './action'

interface actionType {
  type: string
  palyoad?: palyoadType
}

interface palyoadType {
  todos?: todoType[]
  todo?: todoType
  id?: number
}

interface todoType {
  id: number
  title: string
  date: string
  rangeTime: number
  isComplete: boolean
}

const todosInitial: todoType[] = [
  {
    id: 1,
    title: 'todo 1',
    date: '17 Oct 2023',
    rangeTime: 2,
    isComplete: false
  },
  {
    id: 2,
    title: 'todo 2',
    date: '17 Oct 2023',
    rangeTime: 2,
    isComplete: false
  }
]

const todosReducer = (initialState: todoType[] = todosInitial, action: actionType): any[] => {
  switch (action.type) {
    case ActionType.TODOS_ADD:
      return [action.palyoad?.todo, ...initialState]
    case ActionType.TODOS_DELETE:
      return initialState.filter((todo) => todo.id !== action.palyoad?.id)
    case ActionType.TODOS_TOGGLE:
      return initialState.map((todo: todoType) => todo.id === action.palyoad?.id ? { ...todo, isComplete: !todo.isComplete } : todo)
    default:
      return initialState
  }
}

export { todosReducer, type actionType, type todoType }
