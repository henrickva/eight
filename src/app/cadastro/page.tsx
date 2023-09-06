'use client'
import style from '@/app/cadastro/page.module.css'
import { Box, Paper, Container} from '@mui/material';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Cadastro(){

    const [data, setData] = useState({
            name: "",
            lastName:"",
            username:"",
            age: "",
            country:"",
            city:"",
            bio:""

    })
    
    const inputValue = (e:any) => setData({
        ...data, [e.target.name]:e.target.value
    })
    
    function handleSingIn(e:any){
        e.preventDefault()
        
    }
    

    return (
        <Box
            className={style.body}
        >
            <Container
                sx={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center'
                }}
                >
                    <h1 className={style.title}>Seja bem vindo ao eigtht's</h1>
                    <Paper>
                        <Box
                        onSubmit={handleSingIn}
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
                            label="Name"
                            variant="filled"
                            sx={{my:1}} 
                            size="small"
                            onChange={inputValue}
                            />

                            <TextField
                            required
                            label="Last Name"
                            variant="filled"
                            sx={{my:1}}
                            size="small"
                            onChange={inputValue}
                            />

                            <TextField
                            required
                            label="Username"
                            variant="filled"
                            sx={{my:1}}
                            size="small"
                            onChange={inputValue}
                            />

                            <TextField
                            required
                            type="number"
                            label="Age"
                            variant="filled"
                            sx={{my:1}}
                            size="small"
                            onChange={inputValue} 
                            />
                            
                            <div className={style.adress}>
                                <TextField
                                label="Country"
                                variant="filled"
                                sx={{my:1, mr:1}}
                                size="small"
                                onChange={inputValue}
                                />
                                
                                <TextField
                                label="City"
                                variant="filled"
                                sx={{my:1}} 
                                size="small"
                                onChange={inputValue}
                                />
                            </div>
                           

                            <TextField
                            label="Bio"
                            variant='filled'
                            multiline
                            rows={4}
                            sx={{my:1}}
                            onChange={inputValue}
                            />


                            <Button
                            type='submit'
                            href='/profile'
                            sx={{my:2}} 
                            color='primary' 
                            variant="outlined"
                            >
                            Register
                            </Button>

                        </Box>
                    </Paper>
            </Container>
        </Box>                 
    )
}