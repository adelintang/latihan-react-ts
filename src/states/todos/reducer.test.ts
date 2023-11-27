/* scenario test for todosReducer */
/*
  - should return initial state when action UNKNOWN
  - should return todos with new todo when action todos/add
  - should return todos with new todo when action todos/delete
  - should return todos with new todo when action todos/toggle
*/

import { describe, it, expect } from 'vitest'
import { todosReducer } from './reducer'
import type { actionType, todoType } from './reducer'

describe('todosReducer function', () => {
  it('should return initial state when action UNKNOWN', () => {
    // arrange
    const initialState: any[] = []
    const action: actionType = {
      type: 'UNKNOWN'
    }

    // action
    const nextState = todosReducer(initialState, action)

    // expect
    expect(nextState).toEqual(initialState)
  })

  it('should return todos with new todo when action todos/add', () => {
    // arrange
    const initialState: todoType[] = [
      {
        id: 1,
        title: 'todo 1',
        date: '17 Oct 2023',
        rangeTime: 2,
        isComplete: false
      }
    ]

    const action: actionType = {
      type: 'todos/add',
      palyoad: {
        todo: {
          id: 2,
          title: 'todo 2',
          date: '17 Oct 2023',
          rangeTime: 2,
          isComplete: false
        }
      }
    }

    // action
    const nextState = todosReducer(initialState, action)

    // expect
    expect(nextState).toEqual([action.palyoad?.todo, ...initialState])
  })

  it('should return todos with new todo when action todos/delete', () => {
    // arrange
    const initialState: todoType[] = [
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

    const action: actionType = {
      type: 'todos/delete',
      palyoad: {
        id: 2
      }
    }

    // action
    const nextState = todosReducer(initialState, action)

    // expect
    expect(nextState).toEqual(initialState.filter((todo) => todo.id !== action.palyoad?.id))
  })

  it('should return todos with new todo when action todos/toggle', () => {
    // arrange
    const initialState: [todoType, todoType] = [
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

    const action: actionType = {
      type: 'todos/toggle',
      palyoad: {
        id: 2
      }
    }

    // action
    const nextState = todosReducer(initialState, action)

    // expect
    expect(nextState).toEqual(initialState.map((todo: todoType) => todo.id === action.palyoad?.id ? { ...todo, isComplete: !todo.isComplete } : todo))
  })
})
