import { Box, Container, Paper } from "@mui/material";
import style from './page.module.css'
import Image from "next/image";
import profilePic from '@/assets/profilePic.png'
import Navbar from "@/components/Navbar";

export default function Profile(){
    return(
        <>
        <Navbar />
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
                    alt="aqui vai a foto de perfil" 
                    width={100}
                    height={100}   
                />
                
            </Paper>

            <Paper 
                sx={{
                    mt:2,
                    p:3    
                }}>
               Postagens vão aqui
            </Paper>
            </Container>
        </Box>
        </>
    )
}