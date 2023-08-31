'use client'
import Navbar from "@/components/Navbar";
import { Box, Modal, Paper } from "@mui/material";
import style from  './page.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton'
import { useState } from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


export default function Dashboard(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
        <Navbar />
        <Box 
            className={style.body}
            sx={{
                height:'100vh',
                display:'flex',
                justifyContent: 'center',
            }}
        >
                <Box
                    sx={{
                        p:2,
                        width:'80%',
                        my: 2,
                        
                    }}    
                >
                    <Paper

                        sx={{p:3, mb:3}}
                    >
                        <Box 
                            sx={{display:'flex', alignItems:'center'}}
                        >
                            <AccountCircleIcon />
                            <p className={style.postName}>Username</p>
                        </Box>
                        
                        <p className={style.postDate}>hora da postagem</p>

                        <h4 className={style.post}>Postagem</h4>

                        <Box sx={{display:'flex', justifyContent:'center'}}>
                            <IconButton aria-label="like">
                                <FavoriteBorderIcon />
                            </IconButton>

                            <IconButton aria-label="share"  >
                                <SendIcon />
                            </IconButton>

                            <IconButton onClick={handleOpen} aria-label="coment"  >
                                <AddCommentIcon />
                            </IconButton>

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
                                <TextField
                                required
                                label="Comentário"
                                type='text'
                                variant="filled"
                                sx={{my:2, width: '80%'}} 
                                />
                                <Button onClick={handleClose}>Adicionar Comentário</Button>
                                </Paper>
                            </Modal>
                        </Box>
                    </Paper>

                    <Paper

                        sx={{p:3, mb:3}}
                    >
                        <Box 
                            sx={{display:'flex', alignItems:'center'}}
                        >
                            <AccountCircleIcon />
                            <p className={style.postName}>Username</p>
                        </Box>
                        
                       <p className={style.postDate}>hora da postagem</p>

                       <h4 className={style.post}>Postagem</h4>

                       <Box sx={{display:'flex', justifyContent:'center'}}>
                            <IconButton aria-label="like">
                                <FavoriteBorderIcon />
                            </IconButton>

                            <IconButton aria-label="share"  >
                                <SendIcon />
                            </IconButton>

                            <IconButton aria-label="coment"  >
                                <AddCommentIcon />
                            </IconButton>
                        </Box>
                    </Paper>

                    <Paper

                        sx={{p:3, mb:3}}
                    >
                        <Box 
                            sx={{display:'flex', alignItems:'center'}}
                        >
                            <AccountCircleIcon />
                            <p className={style.postName}>Username</p>
                        </Box>
                        
                       <p className={style.postDate}>hora da postagem</p>

                       <h4 className={style.post}>Postagem</h4>

                       <Box sx={{display:'flex', justifyContent:'center'}}>
                            <IconButton aria-label="like">
                                <FavoriteBorderIcon />
                            </IconButton>

                            <IconButton aria-label="share"  >
                                <SendIcon />
                            </IconButton>

                            <IconButton aria-label="coment"  >
                                <AddCommentIcon />
                            </IconButton>
                        </Box>
                    </Paper>

                    
                </Box>
        </Box>
        </>
    )
}