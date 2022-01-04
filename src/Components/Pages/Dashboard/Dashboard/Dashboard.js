import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";

const drawerWidth = 200;

function Dashboard(props) {
  const { logOut, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* link here */}
      <Box sx={{ ml: 3 }}>
        <NavLink style={{ textDecoration: "none" }} to="/Home">
          <i className="fas fa-home"></i> Home
        </NavLink>{" "}
        <br />
      </Box>
      <Divider />

      <Box sx={{ ml: 3 }}>
        {!admin && <Box><NavLink style={{ textDecoration: "none" }} to="/dashboard">
          <i className="fab fa-first-order-alt"></i> My Orders
        </NavLink>{" "}
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/AddUserSuggest">
            <i className="far fa-plus-square"></i> Add User Suggest
          </NavLink>{" "}
          <br /></Box>}

        {admin && <Box>

          <NavLink style={{ textDecoration: "none" }} to="/dashboard/addProduct">
            <i className="far fa-plus-square"></i> Add Product
          </NavLink>{" "}
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard/manageProduct"
          >
            <i className="fas fa-tasks"></i> Manage Products
          </NavLink>{" "}
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard/DisplayUserSuggest"
          >
            <i className="fas fa-tasks"></i> Display User Suggest
          </NavLink>{" "}
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard"
          >
            <i className="fab fa-product-hunt"></i> Manage Orders
          </NavLink>{" "}
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/makeAdmin">
            <i className="fas fa-user-shield"></i> Make Admin
          </NavLink>{" "}
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/manageUser">
            <i className="fas fa-user-shield"></i> Manage User
          </NavLink>
        </Box>}
      </Box>

      <Divider />
      <Button
        onClick={logOut}
        style={{
          backgroundColor: "#0B1C2E",
          marginTop: "10px",
          marginLeft: "20px",
        }}
        variant="contained"
      >
        <i className="fas fa-sign-out-alt mr-3"></i> Log Out
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#0B1C2E",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
export default Dashboard;
