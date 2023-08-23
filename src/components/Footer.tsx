import { Box, Container } from "@mui/material";
import style from '@/components/Footer.module.css'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from "next/link";

export default function Footer(){
    return(
        <Box className={style.footer}>
            <Container 
                sx={{
                    p:3,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <h1 className={style.brand}> <Link className={style.brandLink} href={'/'}> eigtht's <CopyrightIcon /></Link></h1>
                <p>Desenvolvido por <Link className={style.link} target='_blank' href={"https://github.com/henrickva"}>Henrick </Link></p>
            </Container>
        </Box>
    )
}