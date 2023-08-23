import style from '@/app/cadastro/page.module.css'
import { Box, Paper, Container} from '@mui/material';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

export default function Cadastro(){
    return (
        <Box
            className={style.body}
        >
            <Container
                sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center'
                }}
                >
                    <h1 className={style.title}>Seja bem vindo ao eigtht's</h1>
                    <Paper
                        
                    >
                        <Box 
                        sx={
                        {
                            p:4,
                            component:'form',
                            display:'flex',
                            flexDirection: 'column',    
                        }
                        }>
                        <TextField
                            required
                            label="Nome"
                            variant="filled"
                            sx={{my:1}} 
                            size="small"
                            />

                            <TextField
                            required
                            label="Sobrenome"
                            variant="filled"
                            sx={{my:1}}
                            size="small" 
                            />

                            <TextField
                            required
                            label="Nome de usuário"
                            variant="filled"
                            sx={{my:1}}
                            size="small" 
                            />

                            <TextField
                            required
                            type="number"
                            label="Idade"
                            variant="filled"
                            sx={{my:1}}
                            size="small" 
                            />
                            
                            <div className={style.adress}>
                                <TextField
                                label="País"
                                variant="filled"
                                sx={{my:1, mr:1}}
                                size="small"
                                />
                                
                                <TextField
                                label="Cidade"
                                variant="filled"
                                sx={{my:1}} 
                                size="small"
                                />
                            </div>
                           

                            <TextField
                            label="Bio"
                            variant='filled'
                            multiline
                            rows={4}
                            sx={{my:1}}
                            />


                            <Button 
                            href='/profile'
                            sx={{my:2}} 
                            color='primary' 
                            variant="outlined"
                            >
                            Cadastrar
                            </Button>

                        </Box>
                    </Paper>
            </Container>
        </Box>
    )
}