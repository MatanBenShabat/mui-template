import React from 'react'
import { Item } from './App'

function CustomItem({height}) {
  return (
    <Item sx={{height: height, paddingTop: 0}}>Item</Item>
  )
}

export default CustomItem