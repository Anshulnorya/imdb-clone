import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import { routhPath } from "../../constant/route";

function HeaderMenu({ open, handleClose }) {
  const openMenu = Boolean(open);
  return (
    <>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to={`${routhPath.catogry}?catogry=popular`}>
          <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        <Link to={`${routhPath.catogry}?catogry=Top Rated`}>
          <MenuItem onClick={handleClose}>Top rated</MenuItem>
        </Link>
        <Link to={`${routhPath.catogry}?catogry=Upcoming`}>
          <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
      </Menu>
    </>
  );
}

export default HeaderMenu;
