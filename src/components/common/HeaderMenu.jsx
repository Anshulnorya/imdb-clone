import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function HeaderMenu({open , handleClose}) {

    const openMenu = Boolean(open);
  return (
    <>
     <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        <MenuItem onClick={handleClose}>Top rated</MenuItem>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Menu></>
  )
}

export default HeaderMenu