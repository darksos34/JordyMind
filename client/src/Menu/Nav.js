// import React from 'react';
//
// // Import Material UI components for styling
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import {
//     Drawer,
//     AppBar,
//     Toolbar,
//     CssBaseline,
//     Divider,
//     IconButton,
//     Table,
//     Button
// } from '@material-ui/core';
// import {
//     Menu,
//     ChevronLeft,
//     ChevronRight,
//     Search
// } from '@material-ui/icons';
//
// // Import other React components and image(s)
//
// /* All rights reserved by Code Network */
//
//
// // Material UI Styling settings
// const drawerWidth = 240;
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         backgroundColor: '#3d4977',
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: 36,
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//     },
//     drawerOpen: {
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerClose: {
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         overflowX: 'hidden',
//         width: theme.spacing(7) + 1,
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9) + 1,
//         },
//     },
//     toolbar: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));
//
// // React Nav component
// const Nav = () => {
//     // React Hooks State Management
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);
//
//     // Sidebar menu (Drawer) open function
//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };
//
//     // Sidebar menu (Drawer) close function
//     const handleDrawerClose = () => {
//         setOpen(false);
//     };
//
//     return (
//         <div className={classes.root}>
//             <CssBaseline /> {/* Use Material UI standard CSS styles */}
//             <AppBar
//                 position="fixed"
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: open,
//                 })}
//             >
//                 <Toolbar> {/* Top navigation bar */}
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, {
//                             [classes.hide]: open,
//                         })}
//                     >
//                         <Menu />
//                     </IconButton>
//                     {/* Logo */}
//                     <img src={Logo} alt="logo" />
//
//                     {/* Search input */}
//                     <Table className="screen-reader-text" htmlFor="s"><tbody><tr><td></td></tr></tbody></Table>
//
//                     <Button className="align-self-auto" variant="outlined"
//                             name="s1"
//                             color="inherit" type="submit"><Search/></Button>
//                     &nbsp;&nbsp;
//
//                     <input type="search"  className="form-control search-query" placeholder="Search"
//                            name="s1" title="Search for:"/>
//                     &nbsp;&nbsp;
//
//                     <SettingsToolbar />
//                 </Toolbar>
//
//             </AppBar>
//
//             {/* Sidebar navigation (Drawer) */}
//             <Drawer
//                 variant="permanent"
//                 className={clsx(classes.drawer, {
//                     [classes.drawerOpen]: open,
//                     [classes.drawerClose]: !open,
//                 })}
//                 classes={{
//                     paper: clsx({
//                         [classes.drawerOpen]: open,
//                         [classes.drawerClose]: !open,
//                     }),
//                 }}
//             >
//                 <div className={classes.toolbar}>
//
//                     {/* If drawer is open, show arrow to the right, otherwise arrow to the left */}
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <MenuList /> {/* Import MenuList component */}
//             </Drawer>
//             <main className={classes.content} onClick={handleDrawerClose}>
//                 <div className={classes.toolbar} />
//                 <Router />
//             </main>
//
//         </div>
//     );
// }
//
// export default Nav;