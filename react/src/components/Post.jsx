import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// import Carousel from "nuka-carousel"

export default function Post(){

    const OwlCarousel_params = {
        className:'owl-theme',
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            }
        }
    }

    return (
        <Card>
            <CardHeader
                avatar = {
                    <Avatar>E</Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <Divider />
            <OwlCarousel {...OwlCarousel_params}>
                <CardMedia
                    component="img"
                    image="https://mui.com/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardMedia
                    component="img"
                    image="https://cdn.hk01.com/di/media/images/dw/20220330/585898691999567872274983.jpeg/Q50xXOaC66iSlwL90djTZxDWvxd1vvMOUeA4aFHgOGg?v=w1920"
                    alt="Paella dish"
                />
                <CardMedia
                    component="img"
                    image="https://storage.googleapis.com/pai-images/6c36ffabe52e47afa7cad57666815048.jpeg"
                />
            </OwlCarousel>

            <CardContent sx={{mt: '-16px'}}>
                <Typography gutterBottom variant="h6" component="div">
                    Photos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Browse</Button>
            </CardActions>
        </Card>
    )
}