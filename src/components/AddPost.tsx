import { Box, Button, TextField} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default function AddPost(){
    return(
        <Box sx={{
            width:'80%',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
             <TextField
                label="New Post"
                variant='filled'
                multiline
                rows={4}
                sx={{
                    my:1,
                    width:'100%'
                }}
                />

                <Box>
                    <Button startIcon={<ShareIcon />}>
                        Share
                    </Button>

                    <Button startIcon={<AddToPhotosIcon />}>
                        Add Photo
                    </Button>
                </Box> 
        </Box>
    )
}