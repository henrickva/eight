'use client'
import style from '@/app/cadastro/page.module.css'
import { Box, Paper, Container} from '@mui/material';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState, } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentic } from '@/firebaseConection'

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

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    const inputValue = (e:any) => setData({
        ...data, [e.target.name]:e.target.value
    })
    
    async function handleSingIn(e:any){
        e.preventDefault()
        await createUserWithEmailAndPassword(authentic,email,password)
        .then(()=>{console.log('foi')})
        .catch((error)=>{console.log('n foi'+ error)})

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
                    <Paper sx={{
                        width: {xs:'90%', md:'50%'}
                        }}
                    >
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
                                sx={{
                                    my:1, 
                                    mr:{xs:'0', md:'1'}
                                }}
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

                            
                            <TextField
                            label="E-mail"
                            type='email'
                            variant='filled'
                            sx={{my:1}}
                            onChange={(e) =>setEmail(e.target.value)}
                            />

                            <TextField
                            label="Password"
                            type='password'
                            variant='filled'
                            sx={{my:1}}
                            onChange={(e) =>setPassword(e.target.value)}
                            />                            

                            <Button
                            type='submit'
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