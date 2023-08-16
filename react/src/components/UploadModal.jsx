import { Box, Fade, Modal, Typography, Button, Container } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { React, useEffect, useState } from "react";
import axiosClient from "../axios-client";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LinearProgress from '@mui/material/LinearProgress';

export default function UploadModal(props){
    const [isDragging, setIsDragging] = useState(false);
    const [uploading, setUploadStatus] = useState(false);
    const [files, setFiles] = useState([])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        border: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    };

    const containerStyle = {
        padding: 2,
        borderStyle: 'dashed',
        borderRadius: 2
    }
    
    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };
    
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        
        setIsDragging(false);
    
        setFiles(Array.from(e.dataTransfer.files))
        setUploadStatus(true)
        // uploadFile(file);
    };

    const hanleInputUpload = (e) => {
        setFiles(Array.from(event.target.files))
        console.log(event.target.files)
        setUploadStatus(true)
    }

    const handleClose = () => {
        props.handleClose()
        setFiles([])
    }

    return(
        <Modal
            open={props.open}
            onClose={uploading ? '' : handleClose}
            closeAfterTransition
            slotProps={{
                backdrop: {
                  timeout: 500,
                },
            }}
        >
            <Fade in={props.open}>
                <Box sx={style}>
                    {
                        (files.length > 0) 
                        
                        ?

                        <UploadingFile handleClose={handleClose} files={files} />

                        :

                        <Container sx={containerStyle} id="drop-area">
                            <div
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <center>
                                    <CloudUploadIcon sx={{fontSize: "100px"}}/>
                                    <br />
                                    
                                </center>

                                <Typography variant="h6" sx={{textAlign: 'center'}} gutterBottom>
                                    Drag and Drop here
                                </Typography>
                                <Typography variant="h6" sx={{textAlign: 'center'}} gutterBottom>
                                    Or
                                </Typography>
                                <center>
                                    <Button variant="contained" component="label">
                                        Browse
                                        <input type="file" accept="image/*" onChange={hanleInputUpload} multiple hidden/>
                                    </Button>
                                </center>
                                <br />
                            </div>
                        </Container>
                    }
                    
                </Box>
            </Fade>
        </Modal>
    )
}


function UploadingFile(props){
    const [uploadedNumOfImage, setUploadedNumOfImage] = useState(0)

    return(
        <div>
            <Typography variant="body"><strong>Your Files</strong></Typography>
            <br />
            <List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, bgcolor: 'background.paper', overflow: 'auto', overflowX: 'hidden'}}>
                {
                    (props.files.length > 0) ? props.files.map((file, index) => { return <FileItem file={file} index={index}/> }) : ''
                }
            </List>
            <br />
            <center><Button variant="contained" onClick={props.handleClose}>Done</Button></center>
        </div>
    )
}


function FileItem(props){
    const [image, setImage] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {

        if (props.file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              setImage(e.target.result);
            };
            reader.readAsDataURL(props.file);
        }

        //upload file
        const formData = new FormData();
        formData.append('title', 'testing')
        formData.append('photo', props.file)
        axiosClient.post('/upload', formData, {
                onUploadProgress: (progressEvent) => {
                const percent = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
                );
                setUploadProgress(percent);
            },
        })
    }, [])

    return(
        <ListItem sx={{px: 0, py: 2}} key={props.index}>
            <ListItemAvatar>
                <Avatar src={image} variant="square"></Avatar>
            </ListItemAvatar>
            <Box sx={{ width: '100%' }}>
                <Typography variant="body2" noWrap>{props.file.name}</Typography>
                <LinearProgress variant="determinate" value={uploadProgress} />
            </Box>
        </ListItem>
    )
}