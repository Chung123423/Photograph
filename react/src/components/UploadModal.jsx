import { Box, Fade, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function UploadModal(props){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        border: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
      };


    return(
        <Modal
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            slotProps={{
                backdrop: {
                  timeout: 500,
                },
            }}
        >
            <Fade in={props.open}>
                <Box sx={style}>
                    <center>
                        <CloudUploadIcon sx={{fontSize: "100px"}}/>
                        <br /><br />
                        
                    </center>

                    <Typography variant="h6" sx={{textAlign: 'center'}} gutterBottom>
                        Drag and Drop here
                    </Typography>
                    
                    
                </Box>
            </Fade>
        </Modal>
    )
}