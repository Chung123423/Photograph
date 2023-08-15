import { Avatar, Card, CardContent, Grid, Box, useMediaQuery, useTheme, IconButton, Modal, Button} from "@mui/material"
import { Container, Stack } from "@mui/material"
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useEffect, useState } from "react"
import './Photos.css';

export default function Photos(){

    const [modalOpen, setModalStatus] = useState(false);
    const [modalImageURL, setModalImageURL] = useState('');
    const [selectedPhoto, setSelectedPhoto] = useState([])

    const handlePhotoModalOpen = (url) => { 
      setModalStatus(true) 
      setModalImageURL(url)
    }
    const handlePhotoModalClose = () => { setModalStatus(false) }

    const photoOnClickHandler = () => {

    }

    const photos = [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      "https://storage.googleapis.com/pai-images/55726458e3fa43be94849035468d90a3.jpeg",
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=248&fit=crop&auto=format"
    ]

    const modal_style = {
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",

    }

    const modal_img_style = {
      maxWidth: '90%',
      maxHeight: '90%',
      outline: "none"
    }
    
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
            
            <Modal open={modalOpen} onClose={handlePhotoModalClose} sx={modal_style}>
                <img src={modalImageURL} style={modal_img_style}/>
            </Modal>

            <Stack direction="row" spacing={1}>
                <Button variant="contained" size="small">
                  Select Photos
                </Button>
                {/* <IconButton color='inherit'>
                  <ViewModuleIcon />
                </IconButton> */}
            </Stack>

            <ImageList cols={imageListResponse()} variant="masonry" rowHeight={'auto'}>
                    {
                      photos.map((photo, index)=>{
                        return(
                          <ImageListItem key={index} >
                            <img
                              src={photo}
                              className="photo"
                              onClick={()=>{handlePhotoModalOpen(photo)}}
                              loading="lazy"
                            />
                          </ImageListItem>
                        )
                      })
                    }
            </ImageList>
            
        </Container>
    )
}

