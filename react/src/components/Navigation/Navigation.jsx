import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { Link } from "react-router-dom";

//dropdown menu
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';
import Logout from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import CollectionsIcon from '@mui/icons-material/Collections';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function NavigationBar(){
    
    return (
        <Box sx={{ display: 'flex', marginBottom: '80px'}}>
            <CssBaseline />
            <AppBar component="nav" sx={{boxShadow: 0}} color={'inherit'}>
                <Container maxWidth="md">
                    <Toolbar>
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton> */}

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Photograph
                        </Typography>

                        <Box>
                            <Stack spacing={{ xs: 1}} direction="row" useFlexGap flexWrap="wrap">
                                <IconButton color="inherit"  sx={{border: 1, borderColor: '#e5eaf2', borderRadius: '16px'}} component={Link} to="/home">
                                    <HomeIcon fontSize="small" />
                                </IconButton>
                                <IconButton color="inherit"  sx={{border: 1, borderColor: '#e5eaf2', borderRadius: '16px'}}>
                                    <CloudUploadIcon fontSize="small" />
                                </IconButton>
                                <IconButton color="inherit"  sx={{border: 1, borderColor: '#e5eaf2', borderRadius: '16px'}} component={Link} to="/photos">
                                    <PhotoLibraryIcon fontSize="small" />
                                </IconButton>
                                <UsericonWithDropdownMenu />
                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
                <Divider />
            </AppBar>
            
        </Box>
    )
}


function UsericonWithDropdownMenu(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <React.Fragment>
            <IconButton sx={{ padding: 0, marginLeft: 1 }} onClick={handleClick}>
                <Avatar src="https://mui.com/static/images/avatar/2.jpg"/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose} sx={{width: 200}} dense>
                    <ListItemIcon><AccountBoxIcon fontSize="small" /></ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{width: 200}} dense>
                    <ListItemIcon><AutoAwesomeMotionIcon fontSize="small" /></ListItemIcon>
                    My Posts
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{width: 200}} dense>
                    <ListItemIcon><SettingsIcon fontSize="small" /></ListItemIcon>
                    Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{width: 200}} dense>
                    <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
                    Logout
                </MenuItem>

            </Menu>
        </React.Fragment>
    )
}