import SortRoundedIcon from '@mui/icons-material/SortRounded';
import { AddCircleOutlineRounded } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { useState } from 'react';

function Navbar() {
  const [cTime, setCTime] = useState();

  const updateTime = () => {
    let time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setCTime(time);
  };
  setInterval(updateTime, 1000);
  clearInterval(updateTime);

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='sort'
          sx={{ mr: 16 / 8 }}
        >
          <SortRoundedIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant='body2'
            sx={{
              textAlign: 'center',
              fontWeight: 'medium',
              opacity: 1,
            }}
          >
            weatherApp
          </Typography>
          <Typography
            variant='caption'
            component='div'
            sx={{
              textAlign: 'center',
            }}
          >
            {cTime}
          </Typography>
        </Box>

        <IconButton
          size='large'
          edge='end'
          color='inherit'
          aria-label='add'
          sx={{ ml: 16 / 8 }}
        >
          <AddCircleOutlineRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
