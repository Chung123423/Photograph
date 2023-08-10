import { useState } from "react"
import Post from "../components/Post"
import { Container, Stack } from "@mui/material"
import Grid from '@mui/material/Grid';

export default function Home(){
    const [post, setPost] = useState([]);

    return (
        <div>
            <Container sx={{maxWidth: {xs: 'xs', sm: 'sm', md: 'md'} }} maxWidth='xs'> 
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>  
                            <Post />
                            <Post />
                            <Post />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>  
                            <Post />
                            <Post />
                        </Stack>
                    </Grid>
                </Grid>
                
            </Container>
        </div>
    )
}