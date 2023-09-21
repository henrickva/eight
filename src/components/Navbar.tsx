import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import SettingsIcon from '@mui/icons-material/Settings'
import style from './Navbar.module.css'
import {  Button, Typography} from '@mui/material';
import {signOut} from "next-auth/react"
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navabar(){
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar 
        color='transparent'
        className={style.colorBar}
        position="sticky"
        >
        <Toolbar 
         sx={{
            width:'90%',
            display:'flex',
            justifyContent: 'space-between'
            }}
        >
            <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            fontWeight: 700,
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        eight's
                    </Typography>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List sx={{ 
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        <Button href='/dashboard' variant='text'> Home</Button>

        <Button href='/profile' variant='text'> Meu Perfil </Button>

        <IconButton aria-label="setings"  color="primary">
            <SettingsIcon />
        </IconButton>

        <IconButton 
            onClick={() => signOut({
                callbackUrl:'/'
            })}
            aria-label="setings"  
            color="error">
            <LogoutIcon />
        </IconButton>
        </List>
      </Drawer>
    </>
  );
};
