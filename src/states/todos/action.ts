import type { todoType, actionType } from './reducer'

// type ActionTypes = Record<string, string>
interface ActionTypes {
  TODOS_ADD: string
  TODOS_DELETE: string
  TODOS_TOGGLE: string
}

const ActionType: ActionTypes = {
  TODOS_ADD: 'todos/add',
  TODOS_DELETE: 'todos/delete',
  TODOS_TOGGLE: 'todos/toggle'
}

const addTodoActionCreator = ({ id, title, date, rangeTime, isComplete }: todoType): actionType => {
  return {
    type: ActionType.TODOS_ADD,
    palyoad: {
      todo: {
        id, title, date, rangeTime, isComplete
      }
    }
  }
}

const deleteTodoActionCreator = (id: number): actionType => {
  return {
    type: ActionType.TODOS_DELETE,
    palyoad: {
      id
    }
  }
}

const toggleTodoActionCreator = (id: number): actionType => {
  return {
    type: ActionType.TODOS_TOGGLE,
    palyoad: {
      id
    }
  }
}

export { ActionType, addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator }
