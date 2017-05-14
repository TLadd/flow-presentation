// @flow

import { connect, type Connector } from 'react-redux'
import { getUser } from './8-root-reducer'
import type { State, User, Dispatch } from './types'

type Props = {
  onClick: () => mixed,
  user: User,
}
const UserComp = ({ onClick, user }: Props) => (
  <button onClick={ onClick }>
    { user.name }
  </button>
)

type OwnProps = {
  userId: string,
}
const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  user: getUser(state, ownProps.userId),
})
const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  onClick: () => dispatch({ type: 'REMOVE_USER', userId: ownProps.userId })
})

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps)
export const ConnectedComponent = connector(UserComp)

const Test = () => (
  <ConnectedComponent userId="1" />
)
