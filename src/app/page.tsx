'use client'
import { Box, Paper, Container} from '@mui/material';
import TextField from '@mui/material/TextField'
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import style from '@/app/page.module.css'

export default function Home() {
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
            Seja Bem-vindo ao Eigths 
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
                  sx={{my: 2, width: '50%'}}  
                  variant="outlined" 
                  >
                    <GoogleIcon className={style.logoGoogle} />
                  Login com Google
                </Button>
            </Box>
        </Paper>
      </Container>
      </Box>
    
  )
}
