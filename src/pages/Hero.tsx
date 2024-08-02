import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Title from '../components/Title';
import ProfileImage from '../features/Hero/ProfileImage';
import FilledButton from '../components/Button/FilledButton';
import StrokedButton from '../components/Button/StrokedButton';
 
function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  return (
    

      <div ref={ref}  id='hero' className="hero  xl:px-64 mt-16 md:mt-20 flex flex-col md:flex-row-reverse justify-center items-center bg-white dark:bg-black dark:text-white text-gray-700" >
       {/* image  */}
        <div ref={ref} className={`p-5 w-96 md:w-[700px] lg:w-[1000px] opacity-0 transition-opacity duration-1000  ${inView ? ' opacity-100 animate-slide-in-down md:animate-slide-in-right' : ''
          }`} ><ProfileImage /></div>


        <div
         ref={ref} className={`flex flex-col items-center  opacity-0 transition-opacity duration-1000  ${inView ? ' opacity-100 animate-slide-in-down ' : ''
        }`}  >   
           {/* <div */}
          {/* //    className={`opacity-0 transition-opacity duration-1000 ${inView ? ' animate-slide-in-left opacity-100' : '' */}
          {/* // }`} */}
          {/* > */}
           <h1 className='hidden text-2xl font-bold md:block'>Hi! I'm</h1>


   
          <span ref={ref} className={`opacity-0 transition-opacity duration-1000 ease-in-out ${inView ? ' opacity-100' : ''
          }`}>         <Title title='Rabin' /><span> </span><Title title='Glan' /></span>
          <div ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-up opacity-100' : ''
            }`}>
          <p className="py-6 font-cursive font-bold p-10 dark:text-gray-200 text-gray-700">"Join me on this digital odyssey, where creativity meets functionality, and every project is a testament to my commitment to excellence. Let's build something extraordinary together!"</p>
       
          <div  className={`flex gap-5 justify-center`} >     
<FilledButton onClick={()=>{}} title='Hire Now' />
<StrokedButton onClick={()=>{}} title='About Me'/>

</div>
            {/* </div> */}
        </div> 
        </div>
   
    </div>);
//    <div className='flex'>
// <div className=''>

//    </div>
//    <p className='w-1/2'>
//    </p> 
//    <div><button>asdf</button><button>asdf</button></div></div>
//    <div>

//    </div>
// </div> 
//           );
}

export default Hero