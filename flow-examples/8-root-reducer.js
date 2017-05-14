// @flow
import { combineReducers } from 'redux'
import user, * as fromUserReducer from './7-user-reducer'
import type { State } from './types'

export default combineReducers({
  user
})

export const getUser = (state: State, id: string) => fromUserReducer.getUser(state.user, id)
