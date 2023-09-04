'use client'
import {createTheme, ThemeProvider} from '@mui/material';

export default function Theme(props:any){
    const theme = createTheme({
        typography:{
            fontFamily:['Raleway'].join(','),
        },
        palette:{
            primary:{
                main: '#021649'
            }
        }
      })

    return(
        <ThemeProvider theme={theme}>
                {props.children}
        </ThemeProvider>
    )
}