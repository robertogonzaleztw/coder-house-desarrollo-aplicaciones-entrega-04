export const NotesTypeReducer = {
  ADD_NOTE: 'ADD_NOTE',
  SELECT_NOTE: 'SELECT_NOTE',
}

export const notesReducer = (state, action) => {
  switch (action.type) {
    case NotesTypeReducer.ADD_NOTE:
      return (state = {
        ...state,
        notes: [...state.notes, action.payload],
      })
    case NotesTypeReducer.SELECT_NOTE:
      const noteSelected = state.notes.find(
        (note) => note.id === action.payload
      )
      return (state = { ...state, noteSelected })
    default:
      return state
  }
}
