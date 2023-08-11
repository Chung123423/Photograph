import { Avatar, Card, CardContent, Grid, Box, useMediaQuery, useTheme } from "@mui/material"
import { Container, Stack } from "@mui/material"
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react"

export default function Photos(){
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
    ];


    const imageListResponse = () => {
        const theme = useTheme()
        const xs = useMediaQuery(theme.breakpoints.only('xs'))
        const sm = useMediaQuery(theme.breakpoints.only('sm'))
        const md = useMediaQuery(theme.breakpoints.only('md'))

        if(xs){
            return 2
        }else if(sm){
            return 3
        }else if(md){
            return 4
        }
        return 4
    }

    return(
        <Container sx={{maxWidth: {xs: 'xs', sm: 'sm', md: 'md'} }} maxWidth='xs'>

            <ImageList cols={imageListResponse()} rowHeight={'auto'}>
                    <ImageListItem >
                        <img
                            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                        />
                    </ImageListItem>
            </ImageList>
            
        </Container>
    )
}