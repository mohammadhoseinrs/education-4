import React, { useEffect, useState } from 'react'
import './Navbar.css'
import navlogo from './../../Assets/images/navbar/logo1.png'
import {FiSearch} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AnimatePresence} from 'framer-motion'
import HamburgerMenu from './HamburgerMenu'
import HeaderSearch from './HeaderSearch'
export default function Navbar() {
    const [openMenu,setOpenMenu]=useState(false)
    const [openSearch,setopenSearch]=useState(false)

    useEffect(() => {
        console.log(openMenu);
        if (openMenu) {
          document.body.style.overflow = 'hidden'
        }
        return ()=>{
            document.body.style.overflow = 'unset'
        }
      }, [openMenu])

  return (
      <>
    <section className='navbar'>
        <section className='navbar__container'>
            <Link to='/' className='navbar__logo'>
                <div className="navbar__logo__right">
                    <img src={navlogo} alt="" />
                </div>
                <div className="navbar__logo__text font__title">
                     لورم ایپسوم 
                </div>
            </Link>
            <section className='navbar__item'>
                <ul className='navbar__item__item'>
                    <Link to='/'>خانه</Link>
                    <Link to='/coursedetail'>دوره ها</Link>
                    <Link to='/userpanel/main'>مدرس ها</Link>
                    <Link to='/blog'>وبلاگ</Link>
                    <Link to='/contact'>تماس با ما</Link>
                    <Link to='/aboutus'>درباره ما</Link>
                </ul>
            </section>
            <section className='navbar__left'>
                <div className="navbar__searchbox" onClick={()=>setopenSearch(true)}>
                    <FiSearch />
                </div>
                <Link to='/signup' className="navbar__login" >
                    <p>ثبت نام / ورود</p>
                    <BiUser />
                </Link>
                <Link to='/signup' className="navbar__login2" >
                    <BiUser />
                </Link>
            </section>
            <div className="hamburger__menu1">
                <GiHamburgerMenu  onClick={()=>setOpenMenu(true)} />
            </div>
        </section>
    </section>
    {openMenu &&
    <AnimatePresence>
      <HamburgerMenu setOpenMenu={setOpenMenu} />
    </AnimatePresence>
    }
    {openSearch && <HeaderSearch openSearch={openSearch} setopenSearch={setopenSearch}/>}
    </>
  )
}
