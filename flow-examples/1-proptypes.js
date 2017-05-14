// @flow
import PropTypes from 'prop-types'
import React from 'react'

const props = {
  requiredString: PropTypes.string.isRequired,
  optionalString: PropTypes.string,
  nullableString: PropTypes.string,
  requiredNumber: PropTypes.number.isRequired,
  bool: PropTypes.bool.isRequired,
  stringArray: PropTypes.arrayOf(PropTypes.string),
  enumProp: PropTypes.oneOf(['good', 'bad']).isRequired,
  onEdit: PropTypes.func.isRequired,
  children: PropTypes.node,
  objectProp: PropTypes.shape({
    field1: PropTypes.string.isRequired,
    filter2: PropTypes.number.isRequired,
  }).isRequired,
}

type Props = {
  requiredString: string,
  optionalString?: string,
  nullableString: ?string,
  requiredNumber: number,
  bool: boolean,
  stringArray: Array<string>,
  enumProp: 'good' | 'bad',
  onEdit: (string) => mixed,
  children?: React$Element<any> | string | number | Array<React$Element<any>>,
  objectProp: {
    field1: string,
    filter2: number,
  },
}
