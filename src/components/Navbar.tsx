'use client'
import { Box, Button, Toolbar, Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import style from './Navbar.module.css'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton'

export default function Navbar(){
    return(
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
                        }}>
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

                    <Box>
                        <Button sx={{mx:1}} href='/dashboard' variant='text'> Home</Button>
                        <Button sx={{mx:1}} href='/profile' variant='text'> Meu Perfil </Button>
                        <IconButton aria-label="setings"  color="primary">
                            <SettingsIcon />
                        </IconButton>
                        <IconButton aria-label="setings"  color="error">
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
        </AppBar>
    )
}