import React from 'react'
import TitleUnderLined from '../components/TitleUnderLined'
import { useInView } from 'react-intersection-observer';
import Card from '../features/services/Card';
import Title from '../components/Title';

function Services() {

  const services=[{
    title:<><Title fontSize='20px' title='Mobile App'/><Title fontSize='20px' title='Development'/> </>,
    skills:['./flutter-logo.png','./reactnative.png'],

  },
  {
    title:<><Title fontSize='20px' title='Frontend'/><Title fontSize='20px' title='Development'/> </>,
    skills:['./html.png','./css.png','./js.png','./bootstrap.png','./tailwind.png','./react.png','./mui.webp','./next.png']
  },
  {
    title:<><Title fontSize='20px' title='Backend'/><Title fontSize='20px' title='Development'/> </>,
    skills:['./node.png','./express.png','./mongo.png','./sql.png','./laravel.png']
  }
]
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  return (
    <div id='services' className='flex flex-col  gap-10 justify-center items-center py-10'>
     <div ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-down opacity-100' : ''
            }`} > <TitleUnderLined title='Services'/></div>
            <div ref={ref} className={`flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-up opacity-100' : ''
            }`} >
              {services.map((service,index) =>{
                return <Card key={index} skills={service.skills} title={service.title}/>
              })}
            </div>
   </div>
  )
}

export default Services
