'use client'
import { Box, Paper, Container} from '@mui/material';
import TextField from '@mui/material/TextField'
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import style from '@/app/page.module.css'
import { signIn} from 'next-auth/react'

export default function Home(){
  

  return (
    <Box 
      className={style.body}
      sx={{
      m: 'auto',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <Container sx={{
        display:'flex',
        height:'100vh',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <div className={style.fundo}>
          <h1
            
            >
            Welcome to Eigth's 
          </h1>
          <p> Uma rede social não tão diferente do que tem aí</p>
        </div>
         

        <Paper sx={{width: '50%'}}>
            <Box 
              sx={
              {
                p: 2,
                component:'form',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                
            }
            }>
               <TextField
                  required
                  label="Email"
                  type='email'
                  variant="filled"
                  sx={{my:2, width: '80%'}} 
                />

                <TextField
                  required
                  label="Senha"
                  type='password'
                  variant="filled"
                  sx={{my:2, width: '80%'}} 
                />


                <Button 
                  href='/cadastro'
                  sx={{my: 2, width: '50%'}} 
                  color='primary' 
                  variant="outlined"
                >
                  Entrar
                </Button>

                <p>Faça login com sua conta Google:</p>

                <Button 
                  onClick={()=>signIn('github',{
                    callbackUrl:'/profile'
                  })}
                  sx={{my: 2, width: '50%'}}  
                  variant="outlined" 
                  >
                    <GitHubIcon className={style.logoGoogle} />
                  Login com GitHub
                </Button>
            </Box>
        </Paper>
      </Container>
      </Box>
  )
}
