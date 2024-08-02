"use client";

import { SegmentOutlined } from '@mui/icons-material';
import { IconButton, List, ListItem, Menu, MenuItem } from '@mui/material';
import { ReactNode, useRef, useState } from 'react';
import ChangeModeButton from '../components/Button/ChangeModeButton';
import Title from '../components/Title';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Hero from '../pages/Hero';
import MyTimeline from '../pages/MyTimeline';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Footer from '../components/Footer';


interface Page {
  id: string;
  title: string;
  page: string;
  pageSection:ReactNode
}

function Root() {
 
 const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const pages: Page[] = [
    { id: 'home', title: 'Home', page: 'home' ,pageSection:<Hero />},
    { id: 'about', title: 'About', page: 'about' ,pageSection:<About />},
    { id: 'timeline', title: 'Timeline', page: 'timeline',pageSection:<MyTimeline /> },
    { id: 'services', title: 'Services', page: 'services' ,pageSection:<Services />},
    { id: 'projects', title: 'Projects', page: 'projects',pageSection:<Projects /> },
    { id: 'contact', title: 'Contact', page: 'contact',pageSection:<Contacts /> },
  ];



  const handleScrollTo = (page: string) => {
    const section = sectionsRefs.current[page];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${page}`);
    }
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
       
       
  
  
<div className='w-full'>
<div className=' fixed flex justify-between items-center px-20 py-2 bg-white dark:bg-black w-full shadow-lg dark:shadow-gray-800 shadow-gray-300 z-50'>
        <div className="cursor-pointer">
          <a onClick={() => {handleScrollTo('home');}}><Title fontSize='30px' title='RG' /></a>
       
        </div>

        <List className='hidden md:flex '>
          {pages.map((page) => (
            <ListItem key={page.id} className='cursor-pointer hover:text-purple-800  dark:text-gray-200 text-gray-700 hover:font-bold font-semibold'>
              <a onClick={() => {handleScrollTo(page.page);}}>{page.title}</a>
            </ListItem>
          ))}
        </List>
      

       
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className='md:hidden'
              >
                <SegmentOutlined className=' dark:text-white  text-purple-950' fontSize='large'/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >

                {pages.map((page)=>{
                  return <MenuItem key={page.id} className='dark:text-purple-950 dark:bg-white  text-gray-900 hover:bg-purple-700 hover:text-white' onClick={handleClose}><a onClick={() => {handleScrollTo(page.page);}}>{page.title}</a></MenuItem>
                })}
        
              </Menu>
            </div>
        
      </div>
    <ChangeModeButton />

      {pages.map((page) => (
        <div
          key={page.id}
          ref={(el) => { sectionsRefs.current[page.page] = el; }}
          id={page.page}
          style={{  paddingTop: '20px'}} // Adjust height as needed
        className='bg-white dark:bg-black '
        >
          {page.pageSection}
        </div>
      ))}

<div className='w-full'>  <Footer /></div>

    
</div>
  );
}

export default Root;
