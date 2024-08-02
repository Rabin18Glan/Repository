import { Avatar, Box } from '@mui/material'
import React from 'react'
import useModeContext from '../context/useModeContextProvider'
import Image from 'next/image';


interface CircularLogoProps{
  className?:string,
  logo:string,
  size?:string,
 
  circle?:boolean
}
function CircularLogo({className,logo,size,circle=true}:CircularLogoProps) {
    const isDark = useModeContext().mode === 'dark';
  return (
    <Avatar sx={{ borderWidth:circle&&'2px',borderColor:'background.paper',backgroundColor:'transparent',height:size||'80px',width:size||'80px' }} className={` rounded-full flex items-center justify-center  ${className}`} >
    <Image className='h-full w-full object-cover'  src={logo} alt="" />
    </Avatar>
  )
}

export default CircularLogo