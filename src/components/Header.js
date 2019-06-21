import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header() {
  return (
    <div className='headerRoot'>
      <AppBar position="static" color="default">
        <Toolbar>
          <div className='logo'>
            <img src='./icon.svg' alt='icon' width='50' />
          </div>
          <Typography variant="h6" color="inherit">
            MovieDB
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
