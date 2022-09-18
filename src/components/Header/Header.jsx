import React from 'react'
import './Header.css'
import {Avatar} from "@mui/material";

const Header = () => {
  return (

    <header className='header'>
      <div className="header-wrapper">
        <img src='https://cdn-icons-png.flaticon.com/512/450/450991.png?w=360' alt='logo'/>
        <Avatar
          alt="Remy Sharp"
          src="https://images.freeimages.com/images/previews/714/happy-1432508.jpg"
          sx={{width: 50, height: 50}}
        />
      </div>
    </header>

  )
}

export default Header