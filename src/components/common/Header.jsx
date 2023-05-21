import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoURL } from "../../constant/constant";
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";

//Components
 import HeaderMenu from "./HeaderMenu";

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 3em !important;
  padding: 0 6rem !important;
  justify-content:space-between;
  & > *{
    padding:0 16px;

  }
  & > div{
    display:flex;
    align-items:center;
    cursor:pointer;
    & > p {
        font-size :14px;
        font-weight :600;
    }

  }
  & > p {
    font-size :14px;
    font-weight :600;
}
`;
const Logo = styled("img")({
  width: 64,
});
const Inputbase = styled(InputBase)`
  background: #FFFFFF;
  height:30px;
  width:55%;
  border-radius:5px;
`;

function Header() {
    const [open , setOpen ] = useState('');
    const handleClick =(e)=>{
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(null);
      };
  return (
    <>
      <AppBar position="static">
        <StyledToolBar>
          <Logo src={logoURL} alt="logo" srcset="" />
          <Box onClick={handleClick}>
            <Menu></Menu>
            <Typography>Menu</Typography>
          </Box>
          <HeaderMenu open={open} handleClose={handleClose} />
          <Inputbase />
          <Typography>
            IMDb
            <Typography
              component="span"
            >
              Pro
            </Typography>
          </Typography>
          <Box>
            <BookmarkAdd></BookmarkAdd>
            <Typography>Watchlist</Typography>
          </Box>
            <Typography>Sign In</Typography>
          <Box>
            <Typography>EN</Typography>
            <ExpandMore></ExpandMore>
          </Box>
        </StyledToolBar>
      </AppBar>
    </>
  );
}

export default Header;
