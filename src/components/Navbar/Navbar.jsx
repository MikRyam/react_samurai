import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

// const setActive = (navData) => navData.isActive ? s.active_link : '';
const setActive = ({isActive}) => isActive ? s.active_link : '';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__container}>
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/'>Home</NavLink>
        </div>
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/profile'>Profile</NavLink>
        </div>
        {/*<div className={`${s.nav_linkElement} ${s.active}`}>*/}
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/news'>News</NavLink>
        </div>
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/posts'>Blog</NavLink>
        </div>
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/music'>Music</NavLink>
        </div>
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/settings'>Settings</NavLink>
        </div>
        <div className={s.nav_linkElement}>
          <NavLink className={setActive} to='/users'>Users</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar