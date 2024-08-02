
import { Code, HtmlRounded, Javascript, PendingActionsRounded, PhpRounded } from '@mui/icons-material';

import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';
import TitleUnderLined from '../components/TitleUnderLined';
import CircularLogo from '../components/CircularLogo';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';


export default function MyTimeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  const timiline = [
    {
      date:'2022 january',
      title:'Started Coding',
      taskDone:'Started to learn C and C++ programming',
      timelineDot:<TimelineDot variant='outlined' color='secondary'>
    
      <CircularLogo size='30px' circle={false} logo='react.png'/>
    
     </TimelineDot>
    },
    {
      date:'2022 april',
      title:'Started Web Development',
      taskDone:'First I learn html,Css and Javascript and Jumped into the React',
      timelineDot: <TimelineDot color="secondary">
      <HtmlRounded />
    </TimelineDot>
    },
 
    {
      date:'2023 january',
      title:'Started Doing own Projects',
      taskDone:'Using React I started building some simple projects',
      timelineDot: <TimelineDot variant='outlined' color="secondary">
      <PendingActionsRounded />
    </TimelineDot>
    },
    {
      date:'2023 may',
      title:'Started Doing Flutter',
      taskDone:'Dark, Flutter with Getx,MVVM arkchitecture,etc',
      timelineDot: <TimelineDot color="secondary">
      <PendingActionsRounded />
    </TimelineDot>
    },
    {
      date:'2023 october',
      title:'Started Backend with Node Js',
      taskDone:'Learn backend concepts and databases',
      timelineDot: <TimelineDot color="primary" variant="outlined">
      <Javascript/>
    </TimelineDot>
    },  {
      date:'2024 february',
      title:'Started Laravel Development',
      taskDone:'Learn backend concepts and databases',
      timelineDot: <TimelineDot variant='outlined'>
      <CircularLogo size='30px' circle={false} logo='laravel.png' />
    </TimelineDot>
    },
  ]
  return (
    <div id='timeline' className=' flex flex-col  justify-center items-center  py-20 dark:text-gray-200  text-gray-900'><div ref={ref} className={`opacity-0 transition-opacity duration-1000  ${
      inView ? ' animate-slide-in-down opacity-100' : ''
    }`}><TitleUnderLined title='Timeline'/></div>
    <Typography ref={ref} className={` font-bold opacity-0 transition-opacity duration-1000  ${inView ?'animate-slide-in-down opacity-100' : ''
            }`} >Start</Typography>
    <Timeline position="alternate" className='w-full h-auto'>
 
      {timiline.map((data,index)=>{
        return <TimelineItem key={index}>

        <TimelineOppositeContent ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-up opacity-100' : ''
            }`}
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        
        >
         {data.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          
          <TimelineConnector ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-down opacity-100' : ''
            }`} />
            <div ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' ease-in-out opacity-100' : ''
    }`}> {data.timelineDot}</div>
          
          <TimelineConnector ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-down opacity-100' : ''
            }`} />
        </TimelineSeparator>
        <TimelineContent ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ?(index%2==0)?' animate-slide-in-right opacity-100':'animate-slide-in-left opacity-100' : ''
            }`} sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           {data.title}
          </Typography>
          <Typography>{data.taskDone}</Typography>
        </TimelineContent>
      </TimelineItem>
      })}
    </Timeline>
    </div>
  )
}

