import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { navList } from "../jsonData";
import "./Header.scss"

const Header = () => {

  const Url = window.location.href;
  const splitUrl = Url.split("/")[3];

  const splitNav = (path) => {
    return path.split("/")[1]
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} className="header">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }} className="header_content">
      <Typography variant="h1">CSS Generator Tool</Typography>
        <ul className="nav">
        {navList.map((nav) => (
          <li key={nav.id} className={splitUrl ===  splitNav(nav.path) ? "nav_active" : null} >
            <Link to={nav.path}>{nav.label}</Link>
          </li>
        ))}
      </ul>
      </Box>

    </Box>
  )
}

export default Header