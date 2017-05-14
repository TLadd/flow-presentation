// @flow
import type { Dispatch as ReduxDispatch } from 'redux'
import type { State as UserState } from './7-user-reducer'

export type User = {
  id: string,
  name: string,
  avatar_url: string,
}

export type Action = { type: 'ADD_USER', user: User }
  | { type: 'REMOVE_USER', userId: string }
  | { type: 'USER_UPDATED', user: User }

export type State = {
  user: UserState,
}

export type Dispatch = ReduxDispatch<Action>
