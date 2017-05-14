// @flow
import React from 'react'

type State = {
  clicked: boolean,
}
type Props = {
  prop1: string,
}

class MyComponent extends React.Component {
  state: State = { clicked: false }
  props: Props
  static defaultProps = {
    prop1: 'default',
  }

  constructor(props: Props) {
    super(props)

    const self: Object = this
    self.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ clicked: true })
  }

  render() {
    return (
      <div>
        <button onClick={ this.onClick }>{ this.props.prop1 }</button>
        { this.state.clicked ? 'was clicked' : 'was not clicked' }
      </div>
    )
  }
}

<MyComponent />
