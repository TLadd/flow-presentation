// @flow
import React from 'react'

const MyComponent = ({ prop1 }: { prop1: string }) => (
  <span>{ prop1 }</span>
)

const SpreadComponent = (props) => (
  <MyComponent { ...props } />
)

const Test = () => <SpreadComponent prop1="prop1" />
const Test2 = () => <SpreadComponent prop1={ 123 } />
