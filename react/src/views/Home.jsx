import { useEffect, useState } from "react"
import Post from "../components/Post"
import PostSkeleton from "../components/Skeleton/PostSkeleton";
import { Container, Stack } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function isScrollAtBottom(){
    var scrollPosition = window.innerHeight + window.pageYOffset;
    var documentHeight = document.documentElement.scrollHeight;
    return scrollPosition >= documentHeight
    

}
export default function Home(){
    const [post, setPost] = useState([]);
    const [loadingPostSpinner, setLoadingPostSpinner] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(isScrollAtBottom()){
                setLoadingPostSpinner(true)
            }
        });

    }, [])

    return (
        <div>
            <Container sx={{maxWidth: {xs: 'xs', sm: 'sm', md: 'md'} }} maxWidth='xs'> 
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>  
                            <PostSkeleton />
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
                
                {loadingPostSpinner ? <Box sx={{ display: 'flex', justifyContent: 'center', padding: 5}}><CircularProgress color="inherit" /></Box> : ''}
            </Container>
        </div>
    )
}