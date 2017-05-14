// @flow
import type { Action, User } from './types'

export type State = {
  [key: string]: User,
}

const users = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_USER':
    case 'USER_UPDATED':
      return {
        ...state,
        [action.user.id]: action.user,
      }
    case 'REMOVE_USER': {
      const nextState: State = { ...state }
      delete nextState[action.userId]
      return nextState
    }
    default:
      return state
  }
}

export default users

export const getUser = (state: State, id: string) => state[id]
