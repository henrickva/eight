'use client'
import { Box, Container, Modal, Paper} from "@mui/material";
import style from './page.module.css'
import Image from "next/image";
import profilePic from '@/assets/profilePic.png'
import Navbar from "@/components/Navbar"
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox'
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react"
import AddPost from "@/components/AddPost";

export default function Profile(){

    

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>       
        <Navbar/>
        <Box 
            className={style.body}
            sx={{
            height:'100vh',
            }}>
            <Container sx={{pt:2}}>

            <Paper 
                sx={{
                    p:3,
                    display:'flex',
                    justifyContent:'space-around',
                    alignItems:'center'
                }}
                > 

                <Box>
                    <p className={style.username}>henrickva</p>
                    
                    <ul className={style.profileInfo}>
                        <li>Henrick Amaral</li>
                        <li className={style.bio}>Escreve alguma coisa aqui de bio</li>
                    </ul>
                </Box>

                <Image 
                    className={style.profilePic}
                    src={profilePic} 
                    alt="profile pic" 
                    width={100}
                    height={100}   
                />
                
            </Paper>

            <Paper 
                sx={{
                    mt:2,
                    p:3    
                }}>
                    <Box
                        sx={{
                            display:'flex', 
                            justifyContent:'center'
                        }}
                    >
                            <Button startIcon={<EditIcon />} href="/settings">
                                 edit profile
                            </Button>

                            <Button startIcon={<AddBoxIcon />} onClick={handleOpen}>
                                 add post
                            </Button>

                            <Modal 
                                open={open} 
                                onClose={handleClose} 
                                sx={{
                                    display:'flex', 
                                    justifyContent:'center'
                                }}>
                                <Paper
                                sx={
                                    {
                                        p: 2,
                                        width:'50%',
                                        m:'auto',
                                        component:'form',
                                        display:'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        
                                    }}
                                >
                                    <AddPost />
                                </Paper>
                            </Modal>
                    </Box>
               Postagens vão aqui
            </Paper>
            </Container>
        </Box>
        </>
    )
}