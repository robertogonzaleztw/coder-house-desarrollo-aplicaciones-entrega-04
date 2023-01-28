import { createContext, useContext, useReducer } from 'react'
import { notesReducer } from '../reducers/noteReducer'

const initialState = {
  notes: [],
  noteSelected: {},
}

const NotesContext = createContext(null)

const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, initialState)

  return (
    <NotesContext.Provider value={{ ...notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  )
}

const useNotes = () => {
  return useContext(NotesContext)
}

export { NotesProvider, useNotes }
