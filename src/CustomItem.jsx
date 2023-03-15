import React from 'react'
import { Item } from './App'

function CustomItem({height, children}) {
  return (
    <Item sx={{height: height, paddingTop: 0}}>{children}</Item>
  )
}

export default CustomItem