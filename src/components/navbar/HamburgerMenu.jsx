import React from 'react'
import { useState } from 'react';
import {GrFormClose} from 'react-icons/gr'
import { motion ,AnimatePresence  } from "framer-motion"
import { Link } from 'react-router-dom'
import {MdKeyboardArrowDown ,MdKeyboardArrowUp} from 'react-icons/md'

export default function HamburgerMenu({setOpenMenu}) {
  const [openServices,setOpenServices]=useState(false)
  const [opendigitalHamburger,setDigitalHamburger]=useState(false)
  return (
      <AnimatePresence>
    <div
    className='hamburgermenu' onClick={()=>setOpenMenu(false)}>
        <motion.div
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.9,ease:'easeIn'}}
        exit={{x:1000}}
        className="hamburgermenu__item" onClick={(event)=>event.stopPropagation()}>
            <div className="close__btn" >
                <GrFormClose onClick={()=>setOpenMenu(false)} /> 
            </div>

        <ul className='hamburgermenu__item__items'>
        <Link to='/' onClick={()=>setOpenMenu(false)}>خانه</Link>
        <Link to='/blog' onClick={()=>setOpenMenu(false)}>وبلاگ</Link>
        
        <p className='hamburger-menu-service' onClick={()=>setOpenServices(!openServices)}>
        دوره ها
          {openServices ?<MdKeyboardArrowUp size={25} />  : <MdKeyboardArrowDown size={25} /> }
          
          </p>
          {
            openServices && (
              <div className="hamburger-digital-marketing">
                  <Link to='/course'>دوره ها</Link>
                <Link to='/blogdetail'>صفحات وبلاگ</Link>
                <Link to='/'>گیم سازی</Link>
                <Link to='/instructordetail'>گرافیک و موشن گرافی</Link>
              </div>
            )
          }
        <Link to='/userpanel/main' onClick={()=>setOpenMenu(false)}> پنل کاربری</Link>
        <Link to='/aboutus' onClick={()=>setOpenMenu(false)}>درباره ما</Link>
        <Link to='/instructordetail' onClick={()=>setOpenMenu(false)}>مدرس</Link>
        <Link to='/contact' onClick={()=>setOpenMenu(false)}>تماس با ما</Link>
      </ul>
        </motion.div>
    </div>
    </AnimatePresence>
  )
}
