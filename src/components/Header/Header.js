import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { navList } from "../jsonData";
import "./Header.scss"

const Header = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} className="header">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }} className="header_content">
      <Typography variant="h1">CSS Generator Tool</Typography>
        <ul className="nav">
        {navList.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.path}>{nav.label}</Link>
          </li>
        ))}
      </ul>
      </Box>

    </Box>
  )
}

export default Header