import React, { ReactNode } from 'react'
import Title from '../../components/Title'
import CircularLogo from '../../components/CircularLogo'
import { Box } from '@mui/material'
interface CardProps{
    title:ReactNode;
    skills:Array<string>;

}
function Card({title,skills}:CardProps){
  return (
    <Box  className='rounded-3xl py-4 w-72 h-auto flex flex-col items-center gap-5 shadow-xl shadow-purple-950 dark:shadow-purple-900 border-2 border-purple-900 dark:border-purple-700'>
    <div className='flex flex-col items-center'> {title}</div>
      <div className='flex flex-wrap gap-2 justify-center'>
       {skills.map((data)=>{
        return <CircularLogo logo={data} className='p-3 border-2 border-purple-900 dark:border-purple-700'/>

      
       })}
      </div>
    </Box>
  )
}

export default Card