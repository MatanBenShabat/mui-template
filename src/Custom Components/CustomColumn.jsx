import { Box, Typography } from '@mui/material'
import React from 'react'

function CustomColumn({height = 0, month}) {
    console.log("here")
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignSelf:"flex-end", width:"5%"}}>
    <Box sx={{width:"5%", bgcolor:"#fca311", borderRadius:10,height:`${height}vh`}}></Box>
    <Typography sx={{}}>{month}</Typography>
    </Box>
  )
}

export default CustomColumn