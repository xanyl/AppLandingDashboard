import * as React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentIcon from "@mui/icons-material/Comment";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeContent from "./Home/HomeContent";
import AboutContent from "./About/AboutContent";
import TestimonialContent from "./Testimonials/TestimonialContent";
import ContactContent from "./Contact/ContactContent";


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const iconComponents = [HomeIcon, InfoIcon, CommentIcon, ContactMailIcon];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (text: string) => {
    setSelectedItem(text);
  };

  const getPageTitle = () => {
    switch (selectedItem) {
      case "Home":
        return "Home Page";
      case "About":
        return "About Page";
      case "Testimonials":
        return "Testimonials Page";
      case "Contact":
        return "Contact Page";
      default:
        return "Mini variant drawer";
    }
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {getPageTitle()}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Home", "About", "Testimonials", "Contact"].map((text, index) => {
              const IconComponent = iconComponents[index];
              return (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => handleListItemClick(text)}
                >
                  <ListItemButton
                    component={Link}
                    to={`/${text.toLowerCase()}`}
                    selected={selectedItem === text}
                    sx={{

                      minHeight: 48,
                      justifyContent: open ? "center" : "flex-start",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon>
                      <IconComponent />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{

            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minWidth: "80vw",
            minHeight: "100vh",
            ...(open && { marginLeft: `-${drawerWidth}px` }),

          }}
        >
          <DrawerHeader />
          <Routes>
            <Route path="/home" element={
              <div style={{ marginLeft: open ? drawerWidth : 0 }}>
                <HomeContent />
              </div>
            } />
            <Route path="/about" element={
              <div style={{ marginLeft: open ? drawerWidth : 0 }}>
                <AboutContent />
              </div>
            } />
            <Route path="/testimonials" element={
              <div style={{ marginLeft: open ? drawerWidth : 0 }}>
                <TestimonialContent />
              </div>
            } />
            <Route path="/contact" element={
              <div style={{ marginLeft: open ? drawerWidth : 0 }}>
                <ContactContent />
              </div>
            } />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
