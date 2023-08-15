import { Button, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom";

export default function NotFound(){

    return (
        <div style={{position: 'absolute', width: '100%',  height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{maxWidth: '400px'}}>
                <CardContent>
                    
                    <Typography variant="h3" sx={{textAlign: "center"}} gutterBottom>
                        404
                    </Typography>
                    <Typography variant="h6" sx={{textAlign: "center"}} gutterBottom>
                        This Page could not be found
                    </Typography>
                    <Typography variant="subtitle2" sx={{textAlign: "center"}} color="text.secondary" gutterBottom>
                        The page you are looking for might have been removed, had its name changed, or its temporarity unavailable.
                    </Typography>
                    <br />
                    <center>
                        <Button variant="contained" href="/home" component={Link} to="/home">Back to home</Button>
                    </center>
                    
                </CardContent>
            </Card>
            
        </div>
    )
}