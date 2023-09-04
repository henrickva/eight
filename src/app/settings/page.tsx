'use client'
import Navbar from "@/components/Navbar";
import { Box, Button, Paper, TextField } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Settings(){
    return(
        <>
            <Navbar />
            <Box
                
                sx={{
                height:'100vh',
                display:'flex',
                justifyContent:'center',
                }}
            >
                <Box 
                    sx={{
                        width:'90%',
                        p:3
                    }}
                >
                   <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        
                        >
                        <h2>Change Username</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                        <TextField
                                required
                                label="Type your new username"
                                variant="filled"
                                sx={{my:1, width:'100%'}} 
                                size="small"
                                />

                                <Button
                                sx={{my:1}}
                                variant="outlined"
                                >
                                Change
                                </Button>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                        <h2>Change Password</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                required
                                type="password"
                                label="Type your new password"
                                variant="filled"
                                sx={{my:1, width:'100%'}} 
                                size="small"
                                />

                                <Button
                                sx={{my:1}}
                                variant="outlined"
                                >
                                Change
                                </Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                        <h2>Change Email</h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                            required
                            label="Type your new email"
                            variant="filled"
                            sx={{my:1, width:'100%'}} 
                            size="small"
                            />

                            <Button 
                            href='/profile'
                            sx={{my:1}}
                            variant="outlined"
                            >
                            Change
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                    <Button 
                        href='/profile'
                        sx={{my:1}}
                        variant="outlined"
                        >
                        Back to profile
                    </Button>
                </Box>

                            
            </Box>
        </>
    )
}