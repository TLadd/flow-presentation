// @flow

function normalize<T: { id: string }>(arr: Array<T>): { [key: string]: T } {
  return arr.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})
}

const idMap = normalize([{ id: '1', name: 'name1' }, { id: '2', name: 'name2' }])
