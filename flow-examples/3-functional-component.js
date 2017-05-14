// @flow

type Props = {
  prop1?: string,
}

const MyComponent = ({ prop1 = 'default' }: Props) => {
  return (
    <span>{ prop1 }</span>
  )
}

<MyComponent />
