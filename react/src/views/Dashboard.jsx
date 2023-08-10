import { Avatar, Card, CardContent, Grid, Box } from "@mui/material"
import { Container, Stack } from "@mui/material"
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react"

export default function Dashboard(){

    return(
        <Container sx={{maxWidth: {xs: 'xs', sm: 'sm', md: 'md'} }} maxWidth='xs'> 
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Avatar 
                                sx={{ width: 82, height: 82, marginBottom: 3 }}
                            />
                            <Typography variant="h5" gutterBottom>
                                Username
                            </Typography>
                            <Typography variant="body1" color="text.secondary" gutterBottom>
                                email@example.com
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>





            </Grid>
        </Container>
    )
}