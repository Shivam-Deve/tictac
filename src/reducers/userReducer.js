import { SET_USER } from '../actions'

const userReducer = (state, action) => {
  if (action.type === SET_USER) {
    return { ...state, isSidebarOpen: false }
  }
  return state
}

export default userReducer
