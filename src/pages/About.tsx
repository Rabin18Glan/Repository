import { useInView } from 'react-intersection-observer';
import TitleUnderLined from '../components/TitleUnderLined';
import FilledButton from '../components/Button/FilledButton';
import StrokedButton from '../components/Button/StrokedButton';

function About() {
  const {ref,inView} = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleDownload = () => {
    const fileUrl = './../assets/CV.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id='about' className='px-10 xl:px-64 flex h-lvh flex-col justify-center items-center gap-10  py-10 dark:text-gray-200 text-gray-700'>
<div ref={ref} className={`opacity-0 transition-opacity duration-300  ${
          inView ? ' animate-slide-in-down opacity-100' : ''
        }`}><TitleUnderLined title='About Me'/></div>

<p ref={ref} className={` font-semibold opacity-0 transition-opacity duration-1000  ${
          inView ? ' ease-in-out opacity-100' : ''
        }`} >I'm a developer studying Computer Science and IT, blending tech expertise with a musical touch for a harmonious approach to problem-solving.
</p>
<p ref={ref} className={`font-bold font-cursive opacity-0 transition-opacity duration-1000  ${
          inView ? ' animate-slide-in-up opacity-100' : ''
        } px-10`}>Join me on this epic quest through the binary jungles and digital dungeons!</p>

<div ref={ref} className={`flex gap-5 font-semibold opacity-0 transition-opacity duration-1000  ${
          inView ? ' animate-slide-in-up opacity-100' : ''
        }`}> <FilledButton onClick={()=>{}}  title='See Projects'/>     
    <a href="./../assets/CV.pdf" download='CV.pdf'> <StrokedButton onClick={()=>{}} title='Download CV'/></a></div></div>
  )
}

export default About