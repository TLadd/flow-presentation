// @flow

import React from 'react'

type FunctionComponent<P> = (P) => ?React$Element<any>
type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>

type AnyComponent<P> = ClassComponent<any, P, any> | FunctionComponent<P>;

function addProps<InputProps: {}, AdditionalProps: {}>(additionalProps: AdditionalProps): (component: AnyComponent<InputProps & AdditionalProps>) => ClassComponent<void, InputProps, void> {
  return (component) => {
    class MapPropsWrapper extends React.Component {
      props: InputProps;

      render() {
        return React.createElement(component, Object.assign({}, this.props, additionalProps))
      }
    }

    return MapPropsWrapper
  }
}

class Test extends React.Component {
  state: { great: string }
  props: { a: string, b: string }
  render() {
    return <div>{this.props.a} {this.props.b}</div>
  }
}

const TestFunc = ({ a, b }: { a: string, b: string }) => (
  <div>{a} {b}</div>
)

const TestHOC = addProps({a: 'hello'})(Test)
// const TestFuncHOC: ClassComponent<void, { b: string }, void> = addProps({a: 'hello'})(TestFunc)


class UseTestHOC extends React.Component {
 props: {b: string}
 render() {
   return <TestHOC b={this.props.b} />
 }
}

// class UseTestFuncHOC extends React.Component {
//     props: {b: string}
//     render() {
//       return <TestFuncHOC b={this.props.b} />
//     }
// }
