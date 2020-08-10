import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

/** Initial State */
const initialState = {
  todos: [
    {id: "e4fa41ae-5743-46b9-b62e-3b97b5811f6e", title: "title 3", text: "Text text text text text new 3"},
    {id: "353dcf3e-53dd-4d1a-bb2d-3204ceb45944", title: "title 2", text: "Text new text 2"},
    {id: "ef9d4fa9-40f5-40dd-b8d5-85ac0052105c", title: "title 1", text: "Text new text text 1"}
  ]
}

/** Create context */
export const GlobalContext = createContext(initialState)

/** Provider Component */
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  /** Actions */
  const removeTodo = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: id
    })
  }

  const addTodo = (todo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }

  const editTodo = (todo) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: todo
    })
  }


  return (
    <GlobalContext.Provider value={{
      todos: state.todos,
      removeTodo,
      addTodo, 
      editTodo
    }}>
      {children}
    </GlobalContext.Provider>
  )
} 
