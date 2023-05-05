import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        // console.log("From navbar", localStorage.getItem('token'));
        navigate("/");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" style={{ padding: '0px 10px', fontSize: '30px' }} to="/">Transport</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav" style={{ padding: '0px 20px' }}>
                    <ul className="navbar-nav text-white">
                        <li className="nav-item active" >
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                        </li>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/register" >Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login" >Login</Link>
                            </li>
                        </form> : <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Navbar



// import * as React from 'react';
// import { useNavigate } from "react-router-dom";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import truckImg from '../assets/truck.png'

// const drawerWidth = 240;
// const navItems = [
//     {
//         path: "/",
//         name: "Home"
//     },
//     {
//         path: "/about",
//         name: "About Us"
//     },
//     {
//         path: "/contact",
//         name: "Contact Us"
//     },
//     {
//         path: "/register",
//         name: "Register"
//     },
//     {
//         path: "/login",
//         name: "Login"
//     },
// ];

// function NavBar(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen((prevState) => !prevState);
//     };

//     const navigate = useNavigate();

//     const handleClick = () => {
//         navItems.map((item) => (
//             navigate(`${item.path}`)
//         ))
//     }

//     const drawer = (
//         <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//             <Typography variant="h6" sx={{ my: 2 }}>
//                 Transport
//             </Typography>
//             <Divider />
//             <List>
//                 {navItems.map((item) => (
//                     <ListItem key={item.name} disablePadding>
//                         <ListItemButton sx={{ textAlign: 'center' }}>
//                             <ListItemText primary={item.name} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }} style={{ backgroundColor: '#c3edea' }}>
//             <CssBaseline />
//             <AppBar component="nav">
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//                     >
//                         Transport
//                     </Typography>
//                     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//                         {navItems.map((item) => (
//                             <Button key={item.name} sx={{ color: '#fff' }} onClick={handleClick}>
//                                 {item.name}
//                             </Button>
//                         ))}
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             <Box component="nav" >
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//             <Box component="main" sx={{ p: 3 }}>
//                 <Toolbar />
//                 <Typography>
//                     <div className='container'>
//                         <div className='row'>
//                             <div className='col-6' style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
//                                 <h1 style={{ fontSize: '60px' }}><b>Transport</b></h1>
//                                 <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
//                                     used to demonstrate the visual form of a document.</p>
//                                 <div>
//                                     <a href="/login"><button type="button" className="btn btn-danger title-button">Book Services</button></a>
//                                 </div>
//                             </div>
//                             <div className='col-6' style={{ paddingLeft: '203px' }}>
//                                 <img style={{ width: '90%' }} src={truckImg} alt="truck" />
//                             </div>
//                         </div>
//                     </div>
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }



// export default NavBar;