import React from 'react'
import TitleUnderLined from '../components/TitleUnderLined'
import { Button, Typography } from '@mui/material'
import useModeContext from '../context/useModeContextProvider'
import { useInView } from 'react-intersection-observer';

function Contacts() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Trigger when 10% of the element is visible
      });
  const isDark = useModeContext().mode === 'dark';
  return (
    <div id='contact' className='flex  flex-col justify-center items-center gap-10  py-10 px-10 text-gray-700 dark:text-gray-200'>
        <div ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-down opacity-100' : ''
            }`} ><TitleUnderLined title='Contact Me'/></div>
     
           
               
                    <div className="flex flex-col lg:flex-row gap-10 justify-center">
                        <div  ref={ref} className={`p-6 bg-gray-200 dark:bg-gray-950  opacity-0 transition-opacity duration-1000 rounded-lg ${inView ? ' ease-in-out opacity-100' : ''
            }`}>
                            <h1 className={`text-3xl sm:text-4xl   font-extrabold tracking-tight`}>
                                Get in touch:
                            </h1>
                            <p className={`text-normal text-lg sm:text-xl font-medium  mt-2`}>
                                Fill in the form to start a conversation directly
                            </p>

                            <div className={`flex items-center mt-8 `}>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className={`w-8 h-8 `}
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className={`ml-4 text-md tracking-wide  font-semibold  w-40`}>
                                    Hetauda, Nepal
                                </div>
                            </div>

                            <div className={`flex items-center mt-8 '}`}>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className={`w-8 h-8 '}`}
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +9779840469397
                                </div>
                            </div>

                            <div className={`flex items-center mt-8 '}`}>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className={`w-8 h-8 '}`}
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    robinjsl321@gmail.com
                                </div>
                            </div>
                        </div>

                        <form className=" flex flex-col justify-center" >
                            <div ref={ref} className={`flex flex-col opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-right opacity-100' : ''
            }`} >
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className={`w-100 mt-2 py-3 px-3 rounded-xl font-semibold bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400 focus:border-purple-500 focus:bg-white dark:focus:bg-gray-950 focus:outline-none`}
                                />
                            </div>

                            <div  ref={ref} className={`flex flex-col mt-2 opacity-0 transition-opacity duration-300  ${inView ? ' animate-slide-in-right opacity-100' : ''
            }`} >
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className={`w-100 mt-2 py-3 px-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400  focus:bg-white dark:focus:bg-gray-950  font-semibold focus:border-purple-500 focus:outline-none`}
                                />
                            </div>

                            <div ref={ref} className={`flex flex-col mt-2 opacity-0 transition-opacity duration-700  ${inView ? ' animate-slide-in-right opacity-100' : ''
            }`} >
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className={`w-100 mt-2 py-3 px-3 rounded-xl  bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400  focus:bg-white dark:focus:bg-gray-950  font-semibold focus:border-purple-500 focus:outline-none`}
                                />
                            </div>
                            <div ref={ref} className={`flex flex-col mt-2 opacity-0 transition-opacity duration-300  ${inView ? ' animate-slide-in-right opacity-100' : ''
            }`} >
                                <label htmlFor="mes" className="hidden">
                                    Message
                                </label>
                                <textarea

                                    name="mes"
                                    id="mes"
                                    placeholder="Message"
                                    className={`w-100 mt-2 py-3 px-3 rounded-xl  bg-gray-100 dark:bg-gray-900 text-gray-100 border border-gray-400  focus:bg-white dark:focus:bg-gray-950  font-semibold focus:border-purple-500 focus:outline-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                ref={ref} className={`btn w-32 mt-5 self-center lg:self-start bg-purple-950 dark:bg-purple-700 text-gray-200 opacity-0 transition-opacity duration-300  ${inView ? ' animate-slide-in-up opacity-100' : ''
            }`} 
                            >
                                Submit
                            </button>
                        </form>
                    </div>
               
         
      
    </div>
  )
}

export default Contacts
